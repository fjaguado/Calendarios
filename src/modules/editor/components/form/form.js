(function(global, angular) {
    'use strict';
    
    function FormController(calendarService) {
        this.information = this.information || {};

        this.close = function() {
            this.show = false;
        };

        this.clean = function() {
            this.information = {};
        };

        this.save = function () {
            this.information.id = this.month + '-' + this.day + '' + Date.now();
            calendarService.add(this.month, this.day, this.information);
            this.close();
            this.clean();
        };
    }

    angular.module('app.editor')
        .component('calForm', {
            controller: FormController,
            bindings: {
                month: '=',
                day: '=',
                show: '=',
                information: '<'
            },
            templateUrl: 'modules/editor/components/form/form.html'
        });

})(this, angular);
