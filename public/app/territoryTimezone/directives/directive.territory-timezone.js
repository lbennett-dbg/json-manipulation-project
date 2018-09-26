(function(){
  'use strict';

  angular.module('dataInputApp')
    .directive('territoryTimezoneDropdown', [territoryTimezoneDropDown]);

  function territoryTimezoneDropDown() {

    return {
      restrict: 'E',
      templateUrl: '/app/territoryTimezone/templates/template.territory-timezone.html',
      controller: 'TerritoryTimezoneController',
      controllerAs: 'territoryDropDown',
      bindToController: true,
      scope: {
        territory: '=',
        timezone: '='
      }
    }
  }
}());
