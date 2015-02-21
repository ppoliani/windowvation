/**
 * Performs math operations
 */
(function(){
    'use strict';
    
    function mathOperationManager(){
    
        // region Inner Methods

        /**
         * Performs the math operation based on the passed string
         * which follows a fixed pattern e.g. 5 plus 5
         * @param operation
         */
        function getResult(operation){
            throw 'Not Implemented';
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