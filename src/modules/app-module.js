﻿(function(global, angular) {
    'use strict';

    angular.module('app', [
        // Dependencies
        'ui.router',
        
        // App
        'app.templates',
        'app.core',
        'app.editor'
    ]);

})(this, angular);
