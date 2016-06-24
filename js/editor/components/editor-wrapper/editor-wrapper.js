(function(global, angular) {
    'use strict';
    
    function EditorController($rootScope, monthsService, calendarService) {
        this.months = monthsService.get();
        this.weekDays = monthsService.getWeek();
        this.events = calendarService.get().events;

        var self = this;
        this.refresh = function() {
            self.events = calendarService.get().events;
        };
        
        $rootScope.$on('calendarUpdated', this.refresh);
    }

    angular.module('app.editor')
        .component('calEditorWrapper', {
            controller: EditorController,
            templateUrl: 'modules/editor/components/editor-wrapper/editor-wrapper.html'
        });

})(this, angular);
