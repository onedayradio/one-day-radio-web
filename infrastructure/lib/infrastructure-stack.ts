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

    // Deployment
    new s3Deploy.BucketDeployment(this, `one-day-radio-web-${process.env.NODE_ENV}-s3-deployment`, {
      sources: [s3Deploy.Source.asset('../build')],
      destinationBucket: bucket,
      cacheControl: [s3Deploy.CacheControl.fromString('max-age=60')],
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
