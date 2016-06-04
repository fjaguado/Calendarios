(function(global, angular) {
    'use strict';
    
    function MonthFormController() {
    }

    angular.module('app.editor')
        .component('calMonthForm', {
            controller: EditorController,
            templateUrl: 'modules/editor/components/editor-wrapper/editor-wrapper.html'
        });

})(this, angular);
