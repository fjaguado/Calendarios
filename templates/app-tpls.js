angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("modules/core/components/site/site.html","<section class=\"content\" ui-view=\"content\"></section>");
$templateCache.put("modules/editor/components/editor-wrapper/editor-wrapper.html","<div class=\"cal-options\">\r\n    \r\n</div>\r\n<cal-months class=\"cal-months\">\r\n    <div class=\"cal-months-month\"\r\n        ng-repeat=\"month in $ctrl.months\">\r\n\r\n        <a id=\"month_{{$index}}\"></a>\r\n        <h2 class=\"cal-months-header\">\r\n            <div class=\"cal-months-arrow\"\r\n                 ng-click=\"$ctrl.goTo($index - 1)\"\r\n                 ng-if=\"!$first\">\r\n                <\r\n            </div>\r\n\r\n            <div class=\"cal-months-title\">\r\n                {{\'Months.\' + month.month | translate}}\r\n            </div>\r\n\r\n            <div class=\"cal-months-arrow cal-months-arrow--right\"\r\n                 ng-click=\"$ctrl.goTo($index + 1)\"\r\n                 ng-if=\"!$last\">\r\n                >\r\n            </div>\r\n        </h2>\r\n        <ul class=\"cal-months-week\">\r\n            <li class=\"cal-months-week_day\"\r\n                ng-repeat=\"weekDay in $ctrl.weekDays\">\r\n                {{\'Days.\' + weekDay | translate}}\r\n            </li>\r\n        </ul>\r\n        <ul class=\"cal-months-days\">\r\n            <li class=\"cal-months-day\"\r\n                ng-class=\"{\'cal-months-day--void\': dayInfo.day === -1}\"\r\n                ng-repeat=\"dayInfo in month.days\">\r\n                <div class=\"cal-months-day_wrapper\"\r\n                    ng-if=\"dayInfo.day !== -1\">\r\n\r\n                    <div class=\"cal-months-day_info\">\r\n                            {{dayInfo.day}}\r\n                    </div>\r\n\r\n                    <span class=\"cal-months-add\"\r\n                        ng-if=\"!$ctrl.events[month.month + dayInfo.day].num || $ctrl.events[month.month + dayInfo.day].num < 3\"\r\n                        ng-click=\"$ctrl.onClickEvent(event, month, dayInfo)\">\r\n                        ( + )\r\n                    </span>\r\n\r\n                    <ul class=\"cal-months-day_events\">\r\n                        <li class=\"cal-months-day_event\"\r\n                            ng-repeat=\"(id, event) in _events = ($ctrl.events[month.month + dayInfo.day].events)\"\r\n                            ng-click=\"$ctrl.onClickEvent(event, month, dayInfo)\">\r\n                            {{event.title}}\r\n\r\n                            <div class=\"cal-months-thumb cal-months-thumb--{{($index+1)}}_{{$ctrl.keys(_events).length}}\">\r\n                                <img ng-if=\"$ctrl.images[event.image].data\"\r\n                                     class=\"cal-months-thumb_image\"\r\n                                     ng-src=\"{{$ctrl.images[event.image].data}}\"\r\n                                     alt=\"{{$ctrl.images[event.image].name}}\">\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <cal-form   month=\"month.month\" \r\n                            day=\"dayInfo.day\" \r\n                            event=\"$ctrl[$ctrl.infoKeyString + month.month + dayInfo.day]\"\r\n                            show=\"$ctrl[$ctrl.popoverKeyString + month.month + dayInfo.day]\"\r\n                            toggle=\"$ctrl[$ctrl.popoverKeyString2 + month.month + dayInfo.day]\"></cal-form>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</cal-months>");
$templateCache.put("modules/editor/components/form/form.html","<div class=\"cal-form\"\r\n    ng-show=\"$ctrl.show\">\r\n\r\n    <div class=\"cal-form-content\">\r\n        <span class=\"cal-form-close\"\r\n                ng-click=\"$ctrl.close()\"\">\r\n                    X\r\n        </span>\r\n\r\n        <label class=\"cal-form-label\">\r\n                <span class=\"cal-form-labeltext\">\r\n                    Título\r\n                </span>\r\n                <input type=\"text\" \r\n                        ng-model=\"$ctrl.information.title\"\r\n                        class=\"form-control cal-form-input\">\r\n        </label>\r\n\r\n        <label class=\"cal-form-label\">\r\n                <span class=\"cal-form-labeltext\">\r\n                     Tipo de evento\r\n                </span>\r\n                <select class=\"form-control cal-form-select\">\r\n                    <option value=\"Tipo1\">Tipo1</option>\r\n                </select>\r\n        </label>\r\n\r\n        <label class=\"cal-form-label\">\r\n                <span class=\"cal-form-labeltext\">\r\n                    Imagen\r\n                </span>\r\n                <input type=\"file\" \r\n                        ng-file-model=\"$ctrl.information.image\"\r\n                        class=\"form-control cal-form-input\">\r\n        </label>\r\n\r\n        <button class=\"btn btn-primary cal-form-button\"\r\n                ng-click=\"$ctrl.save()\">\r\n            Guardar\r\n        </button>\r\n        <button class=\"btn btn-default cal-form-button\"\r\n                ng-click=\"$ctrl.close()\">\r\n            Cancelar\r\n        </button>\r\n        <button class=\"btn btn-danger cal-form-button\"\r\n                ng-if=\"$ctrl.event.id\"\r\n                ng-click=\"$ctrl.remove()\">\r\n            Borrar\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"cal-form-overlay\" ng-click=\"$ctrl.close()\"></div>\r\n</div>");}]);