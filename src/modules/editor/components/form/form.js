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
            this.information.id = calendarService.check(this.month, this.day, this.information) || this.month + '-' + this.day + '' + Date.now();
            calendarService.set(this.month, this.day, this.information);
            this.close();
            this.clean();
        };

        this.$onChanges = function(changes) {
            if(changes.toggle) {
                this.information = this.event;
            }
        }
    }

    angular.module('app.editor')
        .component('calForm', {
            controller: FormController,
            bindings: {
                month: '=',
                day: '=',
                show: '=',
                toggle: '<',
                event: '<'
            },
            templateUrl: 'modules/editor/components/form/form.html'
        });

})(this, angular);
