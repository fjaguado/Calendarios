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
                },
                resolve: {
                    data: function($q, calendarService) {
                        var deferred = $q.defer();
                        calendarService.get().then(function(calendar) {
                            deferred.resolve(calendar);
                        });
                        return deferred.promise;
                    }
                }
            });
    }

    angular.module('app.editor')
        .config(routingConfiguration);

})(this, angular);
