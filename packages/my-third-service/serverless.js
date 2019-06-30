'use strict';

const merge = require('lodash/merge');
const baseConfig = require('../base/baseConfig');

module.exports = merge({}, baseConfig, {
    service: 'third-service',
    functions: {
        thirdLambda: {
            handler: 'src/lambda/thirdLambda.handler',
            events: [
                {
                    http: {
                        path: 'thirdService',
                        method: 'get',
                    },
                },
            ],
        },
    }
});