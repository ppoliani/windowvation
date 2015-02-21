/**
 * response parser
 */
(function(){
    'use strict';

    function responseParser(){

        // region Inner Methods

        /**
         * Parses the response and return the HTTP method and the
         * url of the next request
         * @param response
         */
        function parseResponse(response){
            throw 'Not Implemented';
        }

        /**
         * Parses the question response and return the HTTP method, the
         * url of the next request and the operation to be answered
         * @param response
         */
        function parseQuestionResponse(response){
            throw 'Not Implemented';
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