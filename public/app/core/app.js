(function(){
    'use strict';

    // region Deps

    var
        angular = require('angular'),
        routes = require('../config/routes'),
        routeCallbacks = require('../config/routeCallbacks'),
        controllers = require('./controllers'),
        services = require('./services'),
        constants = require('./constants');
    // endregion

    // region Private Fields

    var
        _mainModule = angular.module('app.core', [
            'ngRoute',
            'app.services',
            'app.controllers'
        ]),

        servicesModule = angular.module('app.services', []),
        controllersModule = angular.module('app.controllers', []);

    // endregion

    // region Register all Controllers

    controllers.forEach(function(controller){
        controllersModule.controller(controller.name, controller.ctrl);
    });

    // endregion

    // region Register All Services

    services.concat(constants).forEach(function(service){
        servicesModule[service.type](service.name, service.service);
    });

    // endregion

    // region Config Phase

    routes(_mainModule);
    routeCallbacks(_mainModule);

    // endregion
})();