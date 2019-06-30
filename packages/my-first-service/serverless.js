'use strict';

const merge = require('lodash/merge');
const baseConfig = require('../base/baseConfig');

module.exports = merge({}, baseConfig, {
    service: 'first-service',
    functions: {
        firstLambda: {
            handler: 'src/lambda/firstLambda.handler',
            events: [
                {
                    http: {
                        path: 'firstService',
                        method: 'get',
                    },
                },
            ],
        },
    }
});