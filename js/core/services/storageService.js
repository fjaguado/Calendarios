(function(global, angular, localforage) {
    'use strict';

    function storageService() {

        this.set = function(key, value, callback) {
            localforage.setItem(key, value, callback);
        };

        this.setAsync = function(key, value) {
            return localforage.setItem(key, value);
        };

        this.get = function(key, callback) {
            localforage.getItem(key, callback);
        };

        this.getAsync = function(key) {
            return localforage.getItem(key);
        };

        this.remove = function(key) {
            localforage.removeItem(key, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        };

        this.iterate = function(callback) {
            return localforage.iterate(callback);
        };
        
        return {
            set: this.set,
            setAsync: this.setAsync,
            get: this.get,
            getAsync: this.getAsync,
            remove: this.remove,
            iterate: this.iterate
        };
    }

    angular.module('app.core')
        .factory('storageService', storageService);

})(this, angular, this.localforage);
