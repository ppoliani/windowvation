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