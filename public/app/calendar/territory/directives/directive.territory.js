(function(){
  'use strict';

  angular.module('dataInputApp')
    .directive('territoryDropDown', [territoryDropDown]);

  function territoryDropDown() {

    return {
      restrict: 'E',
      templateUrl: '/app/calendar/territory/partials/partial.territory.html',
      controller: 'TerritoryController',
      controllerAs: 'territoryDropDown',
      bindToController: true,
      scope: {
        territory: '='
      }
    }
  }
}());
