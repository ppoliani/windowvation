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
