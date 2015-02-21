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
                        httpRequest: data,
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
            var answer = {
                    answer: mathOperationManager.getResult(nextReqDetails.operation)
                },

                url = API_ENDPOINT + nextReqDetails.url;

            httpService[nextReqDetails.httpMethod.toLowerCase()](url, answer)
                .success(function(response, status){
                    console.log('[' + status + '] ' + response);

                    api.records.push({
                        url: url,
                        httpMethod: nextReqDetails.httpMethod,
                        httpRequest: answer,
                        httpResponse: response
                    });

                    _moveToQuestionStep(responseParser.parseResponse(response));
                })
                .error(function(response, status){
                    console.error('[' + status + '] ' + response);
                });
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