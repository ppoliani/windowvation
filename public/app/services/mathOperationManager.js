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