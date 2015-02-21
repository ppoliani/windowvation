
function configure(app){
    app.run(['$rootScope', function($rootScope){
        $rootScope.$on('$routeChangeSuccess', function(event, route){
            $rootScope.title = 'Windowvation | ' + route.title;
        });
    }]);
}

module.exports = configure;