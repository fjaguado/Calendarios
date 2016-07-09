(function(global, angular) {
    'use strict';

    var calendar = {
        events: {}
    };

    var storage = 'calendar_helpdev';

    function calendarService($rootScope, localStorage) {
        var stored = localStorage.get(storage);
        if (stored) {
            calendar = stored;
        }

        this.broadcast = function(information) {
            $rootScope.$broadcast('calendarUpdated', information);
        };

        this.save = function() {
            localStorage.set(storage, calendar);
        };
        
        this.set = function(month, day, information) {
            if (!calendar.events[month]) {
                calendar.events[month] = {};
            }

            if (!calendar.events[month][day]) {
                calendar.events[month][day] = {};
            }

            if (!calendar.events[month][day].events) {
                calendar.events[month][day].events = {};
                calendar.events[month][day].num = 0;
            }

            calendar.events[month][day].num = calendar.events[month][day].num + 1;
            calendar.events[month][day].events[information.id] = information;
            this.save();
            this.broadcast(information);
        };

        this.get = function() {
            return calendar;
        };

        this.remove = function(month, day, information) {
            calendar.events[month][day].num = calendar.events[month][day].num - 1;
            delete calendar.events[month][day].events[information.id];
            this.save();
            this.broadcast(information);
        };
        
        return {
            set: this.set,
            get: this.get,
            save: this.save,
            remove: this.remove,
            broadcast: this.broadcast
        };
    }

    angular.module('app.editor')
        .factory('calendarService', calendarService);

})(this, angular);
