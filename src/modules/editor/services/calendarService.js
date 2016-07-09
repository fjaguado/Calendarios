(function(global, angular) {
    'use strict';

    var calendar = {
        events: {}
    };

    var storage = 'calendar_helpdev';

    function calendarService($rootScope, localStorage) {
        var stored = localStorage.get(storage);
        if(stored) {
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

            calendar.events[month][day][information.id] = information;
            this.save();
            this.broadcast(information);
            return calendar.events[month][day][information.id];
        };

        this.check = function(month, day, information) {
            if (!calendar.events[month] || !calendar.events[month][day] || !calendar.events[month][day][information.id]) {
                return false;
            }

            return (calendar.events[month][day][information.id]).id;
        };

        this.get = function() {
            return calendar;
        };
        
        return {
            set: this.set,
            check: this.check,
            get: this.get,
            save: this.save,
            broadcast: this.broadcast
        };
    }

    angular.module('app.editor')
        .factory('calendarService', calendarService);

})(this, angular);
