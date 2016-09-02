(function(global, angular) {
    'use strict';

    function EditorController($rootScope, $anchorScroll, $location, monthsService) {
        this.months = monthsService.get();
        this.weekDays = monthsService.getWeek();
        this.events = this.data.events;
        this.images = this.data.images;
        this.infoKeyString = 'information';
        this.popoverKeyString = 'showPopover';
        this.popoverKeyString2 = 'showPopover2';

        var self = this;
        this.refresh = function() {
            self.events = self.data.events;
            self.images = self.data.images;
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

        this.goTo = function(index) {
            $location.hash('month_' + index);
            $anchorScroll();
        };

        this.getImage = function(image) {
            var blob = new Blob([image]);
            var url = window.URL.createObjectURL(blob);
            return url;
        };

        this.keys = function(obj) {
            return Object.keys(obj);
        };

        $rootScope.$on('calendarUpdated', this.refresh);
    }

    angular.module('app.editor')
        .component('calEditorWrapper', {
            controller: EditorController,
            bindings: {
                data: '<'
            },
            templateUrl: 'modules/editor/components/editor-wrapper/editor-wrapper.html'
        });

})(this, angular);
