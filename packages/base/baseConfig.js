'use strict';

module.exports = {
    custom: {
        'serverless-offline': {
            port: 4000,
            host: 'localhost'
        }
    },
    provider: {
        name: 'aws',
        runtime: 'nodejs10.x',
        stage: '${opt:stage, "dev"}',
        region: '${opt:region, "eu-west-2"}',
        memorySize: 128,
        timeout: 10,
        deploymentBucket: {
            name: 'my-custom-bucket-javiermendozagomez'
        }
    },
    plugins: [
        'serverless-offline',
    ],
};