import * as cdk from '@aws-cdk/core'
import * as s3 from '@aws-cdk/aws-s3'
import * as s3Deploy from '@aws-cdk/aws-s3-deployment'
import * as cloudfront from '@aws-cdk/aws-cloudfront'
import * as cm from '@aws-cdk/aws-certificatemanager'
import { ValidationMethod } from '@aws-cdk/aws-certificatemanager'

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const domainName = 'onedayradio.com'
    const isProd = process.env.NODE_ENV === 'prod'
    let certificate

    // S3
    const bucket = new s3.Bucket(this, `one-day-radio-web-${process.env.NODE_ENV}-s3`, {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
    })

    // Deployment bucket for index.html. Here we set no cache for index.html
    // to make sure we always get the newest version of index.html
    new s3Deploy.BucketDeployment(
      this,
      `one-day-radio-web-${process.env.NODE_ENV}-s3-html-deployment`,
      {
        prune: false,
        sources: [s3Deploy.Source.asset('../build', { exclude: ['*', '!index.html'] })],
        destinationBucket: bucket,
        cacheControl: [
          s3Deploy.CacheControl.fromString('max-age=0,no-cache,no-store,must-revalidate'),
        ],
      },
    )

    // Deployment bucket configuration for all files except index.html.
    // We cached everything but index.html for a max-age of 1 year, we
    // can safely do this because create-react-app adds a hash to every
    // file when running the production build
    new s3Deploy.BucketDeployment(this, `one-day-radio-web-${process.env.NODE_ENV}-s3-deployment`, {
      prune: false,
      sources: [s3Deploy.Source.asset('../build', { exclude: ['index.html'] })],
      destinationBucket: bucket,
      cacheControl: [s3Deploy.CacheControl.fromString('max-age=31536000')],
    })

    // HTTPS Certificate (only for production deployments)
    if (isProd) {
      certificate = new cm.Certificate(this, 'CustomDomainCertificate', {
        domainName,
        subjectAlternativeNames: [`www.${domainName}`],
        validationMethod: ValidationMethod.DNS,
      })

      new cdk.CfnOutput(this, 'CertificateArn', {
        value: certificate.certificateArn,
      })
    }

    // Cloudfront
    const cfDefaultOptions = {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
      errorConfigurations: [
        {
          errorCode: 403,
          errorCachingMinTtl: 60,
          responsePagePath: '/index.html',
          responseCode: 200,
        },
      ],
    }
    const cfOptions = isProd
      ? {
          ...cfDefaultOptions,
          viewerCertificate: {
            aliases: [domainName, `www.${domainName}`],
            props: {
              acmCertificateArn: certificate && certificate.certificateArn,
              sslSupportMethod: 'sni-only',
            },
          },
        }
      : cfDefaultOptions
    const cf = new cloudfront.CloudFrontWebDistribution(
      this,
      `one-day-radio-web-${process.env.NODE_ENV}-static-distribution`,
      cfOptions,
    )
    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: cf.domainName,
    })
  }
}
