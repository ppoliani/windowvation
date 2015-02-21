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

        function post(url, payload){
            return $http.post(url, payload);
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