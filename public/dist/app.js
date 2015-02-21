/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function(){
	    'use strict';
	
	    // region Deps
	
	    var
	        angular = __webpack_require__(1),
	        routes = __webpack_require__(2),
	        routeCallbacks = __webpack_require__(3),
	        controllers = __webpack_require__(4),
	        services = __webpack_require__(5),
	        constants = __webpack_require__(6);
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// region Consts
	
	// This is relative to the nodeJS static files directory !!!
	var BASE_DIR = '/public/app/';
	
	// endregion
	
	// region Inner Methods
	
	/**
	 * Registers front end routes
	 * @param app
	 */
	function configure(app) {
	    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	        $routeProvider
	            .when('/', {
	                templateUrl: _getPath('home/index'),
	                controller: 'homeCtrl as homeCtrl',
	                title: 'Rest Client'
	            });
	
	        $routeProvider.otherwise('/');
	        $locationProvider.html5Mode(true);
	    }]);
	}
	
	/**
	 * Return the paths relative to base dir
	 *
	 * @param filePath
	 * @returns {string}
	 * @private
	 */
	function _getPath(filePath){
	    return BASE_DIR + filePath + '.html';
	}
	
	// endregion
	
	module.exports = configure;
	


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	function configure(app){
	    app.run(['$rootScope', function($rootScope){
	        $rootScope.$on('$routeChangeSuccess', function(event, route){
	            $rootScope.title = 'Windowvation | ' + route.title;
	        });
	    }]);
	}
	
	module.exports = configure;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Loads all the controllers of the app
	 */
	module.exports = [
	    __webpack_require__(7)
	];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Loads all the services of the app
	 */
	module.exports = [
	
	];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [{
	  name: 'API_ENDPOINT',
	  type: 'constant',
	  service: 'http://localhost:8080/'
	}];


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Home ctrl
	 */
	(function(){
	    'use strict';
	
	    function HomeCtrl(){
	
	        // region Setup
	
	
	        // endregion
	
	        // region Inner Fields
	
	
	        // endregion
	
	        // region Viewmodel
	
	
	        // endregion
	
	    }
	
	    // region CommonJS
	
	    module.exports = {
	        name: 'homeCtrl',
	        ctrl: [
	            HomeCtrl
	        ]
	    };
	    
	    // endregion
	
	})();


/***/ }
/******/ ])
//# sourceMappingURL=app.js.map