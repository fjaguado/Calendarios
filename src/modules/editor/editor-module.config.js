(function(global, angular) {
    'use strict';

    function routingConfiguration($stateProvider) {
        $stateProvider
            .state('app.editor', {
                url: 'editor/',
                views: {
                    content: {
                        component: 'calEditorWrapper'
                    }
                }
            });
    }

    angular.module('app.editor')
        .config(routingConfiguration);

})(this, angular);
