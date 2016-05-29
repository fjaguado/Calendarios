(function(global, angular) {
    'use strict';
    
    var monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            var day = new Date(date);
            var dayInfo = {
                weekDay: day.getDay(),
                day: day.getDate()
            };
            // Only first days
            if (dayInfo.day === 1) {
                var weekDay = dayInfo.weekDay;
                while (weekDay > 1) {
                    days.push({
                        weekDay: -1,
                        day: -1
                    });
                    weekDay--;
                }
            }
            
            days.push(dayInfo);
            date.setDate(date.getDate() + 1);
        }
        
        return {
            year: year,
            month: monthLabels[month],
            days: days
        };
    }
    
    function generateMonths(year) {
        var months = [];
        for (var i = 0; i < 12; i++) {
            months[i] = getDaysInMonth(i, year);
        }
        
        return months;
    }
    
    function monthsService() {
        this.currentYear = new Date().getFullYear();
        
        this.getWeek = function() {
            return [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'                
            ];
        };
        
        return {
            currentYear: this.currentYear,
            get: function() {
                return generateMonths(this.currentYear);  
            },
            getWeek: this.getWeek
        };
    }

    angular.module('app.editor')
        .factory('monthsService', monthsService);

})(this, angular);
