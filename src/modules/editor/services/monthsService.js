(function(global, angular) {
    'use strict';
    
    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            var day = new Date(date);
            var dayInfo = {
                weekDay: day.getDay(),
                day: day.getDate()
            };
            days.push(dayInfo);
            date.setDate(date.getDate() + 1);
        }
        
        return {
            year: year,
            month: month,
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
        
        return {
            currentYear: this.currentYear,
            get: function() {
                return generateMonths(this.currentYear);  
            }
        };
    }

    angular.module('app.editor')
        .factory('monthsService', monthsService);

})(this, angular);
