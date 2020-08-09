#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { InfrastructureStack } from '../lib/infrastructure-stack'

const app = new cdk.App()
new InfrastructureStack(app, `one-day-radio-web-${process.env.NODE_ENV}`, {
  env: {
    region: 'us-east-1',
  },
})
