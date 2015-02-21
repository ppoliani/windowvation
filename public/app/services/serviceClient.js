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