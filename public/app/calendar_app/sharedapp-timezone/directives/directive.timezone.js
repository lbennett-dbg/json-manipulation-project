(function(){
  'use strict';

  angular.module('dataInputApp')
    .directive('timezoneDropDown', [timezoneDropDown]);

  function timezoneDropDown() {

    return {
      restrict: 'E',
      templateUrl: '/app/calendar_app/sharedapp-timezone/partials/partial.timezone.html',
      controller: 'TimezoneController',
      controllerAs: 'timezoneDropDown',
      bindToController: true,
      scope: {
        timezone: '='
      }
    }
  }
}());
