angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("modules/core/components/site/site.html","<section class=\"content\" ui-view=\"content\"></section>");
$templateCache.put("modules/editor/components/editor-wrapper/editor-wrapper.html","<div class=\"cal-options\">\r\n    \r\n</div>\r\n<cal-months class=\"cal-months\">\r\n    <div class=\"cal-months-month\"\r\n        ng-repeat=\"month in $ctrl.months\">\r\n        \r\n        <h2 class=\"cal-months-header\">\r\n            {{\'Months.\' + month.month | translate}}\r\n        </h2>\r\n        <ul class=\"cal-months-week\">\r\n            <li class=\"cal-months-week_day\"\r\n                ng-repeat=\"weekDay in $ctrl.weekDays\">\r\n                {{\'Days.\' + weekDay | translate}}\r\n            </li>\r\n        </ul>\r\n        <ul class=\"cal-months-days\">\r\n            <li class=\"cal-months-day\"\r\n                ng-class=\"{\'cal-months-day--void\': dayInfo.day === -1}\"\r\n                ng-repeat=\"dayInfo in month.days\">\r\n                \r\n                <div class=\"cal-months-day_info\"\r\n                        ng-if=\"dayInfo.day !== -1\">\r\n                        {{dayInfo.day}}\r\n                </div>\r\n                \r\n            </li>\r\n        </ul>    \r\n    </div>\r\n</cal-months>");}]);