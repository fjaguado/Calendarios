(function(global, angular) {
    'use strict';

    var calendar = {
        events: {}
    };

    function calendarService($rootScope) {

        this.broadcast = function(information) {
            $rootScope.$broadcast('calendarUpdated', information);
        };
        
        this.add = function(month, day, information) {
            if (!calendar.events[month]) {
                calendar.events[month] = {};
            }

            if (!calendar.events[month][day]) {
                calendar.events[month][day] = {};
            }

            calendar.events[month][day][information.id] = information;
            this.broadcast(information);
        };

        this.get = function() {
            return calendar;
        };
        
        return {
            add: this.add,
            get: this.get,
            broadcast: this.broadcast
        };
    }

    angular.module('app.editor')
        .factory('calendarService', calendarService);

})(this, angular);
