/**
 * service client
 */
(function(){
    'use strict';
    
    function serviceClient(API_ENDPOINT, httpService, responseParser, mathOperationManager){

        // region Inner Fields

        var responses = [];

        // endregion

        // region Inner Methods

        function start(){
            _sendNameDetails();
        }

        function _sendNameDetails(){
            httpService.post(API_ENDPOINT + '/begin', { name: 'Pavlos' })
                .success(function(response, status){
                    console.log('[' + status + '] ' + response);
                    api.responses.push(response);
                })
                .error(function(response, status){
                    console.error('[' + status + '] ' + response);
                });
        }

        // endregion
        
        // region Public API
        
        var api = {
            start: start,
            responses: responses
        };
        
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