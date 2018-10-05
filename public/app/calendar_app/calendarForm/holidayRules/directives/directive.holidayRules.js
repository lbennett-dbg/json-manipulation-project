(function(){
  'use strict';

  function holidayRulesDirective() {

    return {
      restrict: 'E',
      templateUrl: 'app/calendar/calendarForm/holidayRules/partials/partial.holidayRules.html',
    }

  }
  angular.module('calendarApp')
    .directive('holidayRulesDirective', holidayRulesDirective);
}());
