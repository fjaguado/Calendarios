(function(global, angular) {
    'use strict';
    
    function MonthFormController() {
    }

    angular.module('app.editor')
        .component('calMonthForm', {
            controller: MonthFormController,
            templateUrl: 'modules/editor/components/month-form/month-form.html'
        });

})(this, angular);
