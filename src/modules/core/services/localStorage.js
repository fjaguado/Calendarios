(function(global, angular) {
    'use strict';

    function localStorage() {

        this.set = function(key, obj) {
            global.localStorage[key] = JSON.stringify(obj);
        };

        this.get = function(key) {
            var data = global.localStorage[key];
            return data ? JSON.parse(data) : null;
        };
        
        return {
            set: this.set,
            get: this.get
        };
    }

    angular.module('app.core')
        .factory('localStorage', localStorage);

})(this, angular);
