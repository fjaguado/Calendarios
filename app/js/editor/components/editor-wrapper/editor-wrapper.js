(function(global, angular) {
    'use strict';

    function EditorController($rootScope, monthsService, calendarService) {
        this.months = monthsService.get();
        this.weekDays = monthsService.getWeek();
        this.events = calendarService.get().events;
        this.infoKeyString = 'information';
        this.popoverKeyString = 'showPopover';
        this.popoverKeyString2 = 'showPopover2';

        var self = this;
        this.refresh = function() {
            self.events = calendarService.get().events;
        };

        this.onClickEvent = function(event, month, dayInfo) {
            // TODO: Improve that
            var dayKey = month.month + dayInfo.day;
            var popoverKey = this.popoverKeyString +  dayKey;
            var popoverKey2 = this.popoverKeyString2 +  dayKey;
            var infoKey = this.infoKeyString +  dayKey;

            this[popoverKey] = !this[popoverKey];
            this[popoverKey2] = !this[popoverKey2];
            
            if (!event) {
                return;
            }

            this[infoKey] = event;
        };

        $rootScope.$on('calendarUpdated', this.refresh);
    }

    angular.module('app.editor')
        .component('calEditorWrapper', {
            controller: EditorController,
            templateUrl: 'modules/editor/components/editor-wrapper/editor-wrapper.html'
        });

})(this, angular);
