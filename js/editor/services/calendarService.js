(function(global, angular) {
    'use strict';

    var keys = {
        events: 'cal_events_',
        images: 'cal_images_'
    }

    var calendar = {
        events: {},
        images: {}
    };

    function calendarService($rootScope, storageService) {

        this.broadcast = function(information) {
            $rootScope.$broadcast('calendarUpdated', information);
        };
        
        this.set = function(month, day, information) {
            var key = month + day;
            if (!calendar.events[key]) {
                calendar.events[key] = {};
            }

            if (!calendar.events[key].events) {
                calendar.events[key].events = {};
                calendar.events[key].num = 0;
            }

            calendar.events[key].num = calendar.events[key].num + 1;
            calendar.events[key].events[information.id] = information;
            storageService.set(keys.events + key, calendar.events[key]);
            this.broadcast(information);
        };

        this.get = function() {
            return storageService.iterate(function(value, key) {
                var _key = key.split('_');
                if (_key.length > 1) {
                    calendar[_key[1]][_key[2]] = value;
                }
            }).then(function() {
                return calendar;
            });
        };

        this.remove = function(month, day, information) {
            var key = month + day;
            calendar.events[key].num = calendar.events[key].num - 1;
            delete calendar.events[key].events[information.id];
            storageService.set(keys.events + key, calendar.events[key]);
            this.broadcast(information);
        };
        
        return {
            set: this.set,
            get: this.get,
            remove: this.remove,
            broadcast: this.broadcast
        };
    }

    angular.module('app.editor')
        .factory('calendarService', calendarService);

})(this, angular);
