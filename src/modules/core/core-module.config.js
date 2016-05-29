(function(global, angular) {
    'use strict';

    function routingConfiguration($stateProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                component: 'calSite'
            });
    }

    angular.module('app.core')
        .config(routingConfiguration);

})(this, angular);