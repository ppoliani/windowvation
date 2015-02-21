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
	                controller: 'homeCtrl as vm',
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
	    __webpack_require__(8),
	    __webpack_require__(9),
	    __webpack_require__(10),
	    __webpack_require__(11)
	
	];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [{
	  name: 'API_ENDPOINT',
	  type: 'constant',
	  service: 'http://windowvationquizserver.elasticbeanstalk.com'
	}];


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Home ctrl
	 */
	(function(){
	    'use strict';
	
	    function HomeCtrl(serviceClient){
	        this.records = serviceClient.records
	
	        serviceClient.start();
	    }
	
	    // region CommonJS
	
	    module.exports = {
	        name: 'homeCtrl',
	        ctrl: [
	            'serviceClient',
	            HomeCtrl
	        ]
	    };
	    
	    // endregion
	
	})();


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * http service
	 */
	(function(){
	    'use strict';
	
	    function httpService($http){
	
	        // region Inner Methods
	
	        function get(url){
	            return $http.get(url);
	        }
	
	        function post(url, data){
	            return $http({
	                method: 'POST',
	                url: url,
	                data: data
	            });
	        }
	
	        // endregion
	
	        // region Public API
	
	        return {
	            get: get,
	            post: post
	        };
	
	        // endregion
	    }
	
	    // region CommonJS
	
	    module.exports = {
	        name: 'httpService',
	        type: 'factory',
	        service: [
	            '$http',
	            httpService
	        ]
	    };
	
	    // endregion
	
	})();

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Performs math operations
	 */
	(function(){
	    'use strict';
	    
	    function mathOperationManager(){
	    
	        // region Inner Methods
	
	        /**
	         * Performs the math operation based on the passed array
	         * which follows a fixed pattern e.g. 5 plus 5
	         * @param operation
	         */
	        function getResult(operation){
	            switch(operation[1]){
	                case 'plus':
	                    return operation[0] + operation [2];
	                case 'minus':
	                    return operation[0] - operation [2];
	                case 'times':
	                    return operation[0] * operation [2];
	            }
	        }
	
	        // endregion
	        
	        // region Public API
	        
	        return {
	            getResult: getResult
	        };
	        
	        // endregion
	    }
	    
	    // region CommonJS
	    
	    module.exports = {
	        name: 'mathOperationManager',
	        type: 'factory',
	        service: [mathOperationManager]
	    };
	    
	    // endregion
	
	})();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Response parser
	 */
	(function(){
	    'use strict';
	
	    function responseParser(){
	        // region Consts
	
	        var HTTP_METHOD_REGEX = /GET|POST/gm;
	        var URL_REGEX = /\/\S*$/gm; //find URL
	        var OPERATION_REGEX = /\d+\s(?:plus|minus|times)\s\d+\?/gm;
	
	        // endregion
	
	        // region Inner Methods
	
	        /**
	         * Parses the response and return the HTTP method and the
	         * url of the next request
	         * @param response
	         */
	        function parseResponse(response){
	            return {
	                httpMethod: _findHttpMethod(response),
	                url: _findUrl(response)
	            };
	        }
	
	        /**
	         * Parses the question response and return the HTTP method, the
	         * url of the next request and the operation to be answered
	         * @param response
	         */
	        function parseQuestionResponse(response){
	            return {
	                httpMethod: _findHttpMethod(response),
	                url: _findUrl(response),
	                operation: _getOperation(response)
	            }
	        }
	
	        /**
	         * Finds the http method from the given string
	         * @param response
	         * @private
	         */
	        function _findHttpMethod(response){
	            var result = HTTP_METHOD_REGEX.exec(response);
	
	            HTTP_METHOD_REGEX.lastIndex = 0; // Reset
	
	            if(!result.length){
	                throw new Error('Wrong response; no method found');
	            }
	            else if(result.length > 1){
	                throw new Error('Wrong response; multiple http methods found');
	            }
	
	            return result[0];
	        }
	
	        /**
	         * Finds the url from the given response
	         * @param response
	         * @private
	         */
	        function _findUrl(response){
	            var result = URL_REGEX.exec(response);
	
	            URL_REGEX.lastIndex = 0; // Reset
	
	            if(!result.length){
	                throw new Error('Wrong response; no url found');
	            }
	            else if(result.length > 1){
	                throw new Error('Wrong response; multiple urls found');
	            }
	
	            return result[0];
	        }
	
	        /**
	         * Finds the operation part of the given response
	         * @param response
	         * @private
	         */
	        function _getOperation(response){
	            var result = OPERATION_REGEX.exec(response);
	
	            OPERATION_REGEX.lastIndex = 0; // Reset
	
	            if(!result.length){
	                throw new Error('Wrong response; no operation found');
	            }
	
	            return result[0].split(' ').map(function(token, index){
	                if(index === 1) return token;
	                return parseInt(token);
	            });
	        }
	
	        // endregion
	
	        // region Public API
	
	        return {
	            parseResponse: parseResponse,
	            parseQuestionResponse: parseQuestionResponse
	        };
	
	        // endregion
	    }
	
	    // region CommonJS
	
	    module.exports = {
	        name: 'responseParser',
	        type: 'factory',
	        service: [responseParser]
	    };
	
	    // endregion
	
	})();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * service client
	 */
	(function(){
	    'use strict';
	    
	    function serviceClient(API_ENDPOINT, httpService, responseParser, mathOperationManager){
	
	        // region Inner Methods
	
	        function start(){
	            _sendNameDetails();
	        }
	
	        function _sendNameDetails(){
	            var url = API_ENDPOINT + '/begin',
	                data = { name: 'Pavlos' };
	
	            httpService.post(url, data)
	                .success(function(response, status){
	                    console.log('[' + status + '] ' + response);
	
	                    api.records.push({
	                        url: url,
	                        httpMethod: 'POST',
	                        httpRequest: data.name,
	                        httpResponse: response
	                    });
	
	                    _moveToQuestionStep(responseParser.parseResponse(response));
	                })
	                .error(function(response, status){
	                    console.error('[' + status + '] ' + response);
	                });
	        }
	
	        function _moveToQuestionStep(nextReqDetails){
	            var url = API_ENDPOINT + nextReqDetails.url;
	
	            httpService[nextReqDetails.httpMethod.toLowerCase()](url)
	                .success(function(response, status){
	                    console.log('[' + status + '] ' + response);
	
	                    api.records.push({
	                        url: url,
	                        httpMethod: nextReqDetails.httpMethod,
	                        httpRequest: 'No Data',
	                        httpResponse: response
	                    });
	
	                    _moveToAnswerStep(responseParser.parseQuestionResponse(response));
	                })
	                .error(function(response, status){
	                    console.error('[' + status + '] ' + response);
	                });
	        }
	
	        function _moveToAnswerStep(nextReqDetails){
	            var data = {
	                    answer: mathOperationManager.getResult(nextReqDetails.operation)
	                },
	
	                url = API_ENDPOINT + nextReqDetails.url;
	
	            httpService[nextReqDetails.httpMethod.toLowerCase()](url, data)
	                .success(function(response, status){
	                    console.log('[' + status + '] ' + response);
	
	                    api.records.push({
	                        url: url,
	                        httpMethod: nextReqDetails.httpMethod,
	                        httpRequest: data.answer,
	                        httpResponse: response
	                    });
	
	                    if(!_hasReachedTheEnd(response)){
	                        _moveToQuestionStep(responseParser.parseResponse(response));
	                    }
	                })
	                .error(function(response, status){
	                    console.error('[' + status + '] ' + response);
	                });
	        }
	
	        /**
	         * Checks if the given reponse is the last one
	         * @param response
	         * @returns {boolean}
	         * @private
	         */
	        function _hasReachedTheEnd(response){
	            return response.indexOf('Well done') !== -1;
	        }
	
	        // endregion
	        
	        // region Public API
	        
	        var api = {
	            start: start,
	            records: []
	        };
	
	        return api;
	
	        // endregion
	    }
	    
	    // region CommonJS
	    
	    module.exports = {
	        name: 'serviceClient',
	        type: 'factory',
	        service: [
	            'API_ENDPOINT',
	            'httpService',
	            'responseParser',
	            'mathOperationManager',
	            serviceClient
	        ]
	    };
	    
	    // endregion
	
	})();

/***/ }
/******/ ])
//# sourceMappingURL=app.js.map