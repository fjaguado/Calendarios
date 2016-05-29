(function(global, angular) {
    'use strict';
    
    function EditorController(monthsService) {
        this.months = monthsService.get();
    }

    angular.module('app.editor')
        .component('calEditorWrapper', {
            controller: EditorController,
            templateUrl: 'modules/editor/components/editor-wrapper/editor-wrapper.html'
        });

})(this, angular);
