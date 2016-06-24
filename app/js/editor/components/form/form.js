(function(global, angular) {
    'use strict';
    
    function FormController() {
    }

    angular.module('app.editor')
        .component('calForm', {
            controller: FormController,
            bindings: {
                month: '=',
                day: '=',
                show: '='
            },
            templateUrl: 'modules/editor/components/form/form.html'
        });

})(this, angular);
