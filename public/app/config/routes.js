// region Consts

// This is relative to the nodeJS static files directory !!!
var BASE_DIR = '/public/app/';

// endregion

// region Inner Methods

/**
 * Registers front end routes
 * @param app
 */
function configure(app) {
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: _getPath('home/index'),
                controller: 'homeCtrl as homeCtrl',
                title: 'Rest Client'
            });

        $routeProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }]);
}

/**
 * Return the paths relative to base dir
 *
 * @param filePath
 * @returns {string}
 * @private
 */
function _getPath(filePath){
    return BASE_DIR + filePath + '.html';
}

// endregion

module.exports = configure;

