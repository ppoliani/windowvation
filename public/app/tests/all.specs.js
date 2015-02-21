var app = require('../core/app'),
    utils = require('./utils'),
    mathOperationSpecs = require('../tests/mathOperationManager.specs'),
    reponseParser = require('../tests/responseParser.specs'),
    httpService = require('../tests/httpService.specs');

beforeEach(function(){
    angular.mock.module(utils.moduleName);
});