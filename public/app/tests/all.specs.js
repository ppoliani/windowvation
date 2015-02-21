var app = require('../core/app'),
    utils = require('./utils'),
    mathOperationSpecs = require('../tests/mathOperationManager.specs');

beforeEach(function(){
    angular.mock.module(utils.moduleName);
});