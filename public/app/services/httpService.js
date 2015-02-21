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
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
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