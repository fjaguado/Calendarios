(function(global, angular) {
    'use strict';

    function routingConfiguration($urlRouterProvider) {
        $urlRouterProvider.otherwise('/editor/');
    }

    angular.module('app')
        .config(routingConfiguration);

})(this, angular);
