'use strict';

const merge = require('lodash/merge');
const baseConfig = require('../base/baseConfig');

module.exports = merge({}, baseConfig, {
    service: 'second-service',
    functions: {
        secondLambda: {
            handler: 'src/lambda/secondLambda.handler',
            events: [
                {
                    http: {
                        path: 'secondService',
                        method: 'get',
                    },
                },
            ],
        },
    }
});