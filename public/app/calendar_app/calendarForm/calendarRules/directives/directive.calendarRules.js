(function(){
  'use strict';

  function calendarRulesDirective() {

    return {
      restrict: 'E',
      templateUrl: 'app/calendar/calendarForm/calendarRules/partials/partial.calendarRules.html',
    }

  }
  angular.module('calendarApp')
    .directive('calendarRulesDirective', calendarRulesDirective);

}());
