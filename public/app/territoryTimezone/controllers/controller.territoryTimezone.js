(function(){
  'use strict';

  function TerritoryTimezoneController(territoryDataService, timezoneDataService, $scope, $log, $location, calendarFormConstructorService) {

    var vm = this;

    territoryDataService.getAllTerritories()
      .then(getTerritoriesSuccess)
      .catch(errorTerritoriesCallback);

    function getTerritoriesSuccess(territories) {
      vm.allTerritories = territories;
    }

    function errorTerritoriesCallback(errorMsg) {
      $log.error('Error Message: ' + errorMsg);
    }

    timezoneDataService.getAllTimezones()
      .then(getTimezonesSuccess)
      .catch(errorTimezonesCallback);

    function getTimezonesSuccess(timezones) {
      vm.allTimezones = timezones;
    }

    function errorTimezonesCallback(errorMsg) {
      $log.error('Error Message: ' + errorMsg);
    }

  }

  angular.module('dataInputApp')
    .controller('TerritoryTimezoneController', TerritoryTimezoneController);
    TerritoryTimezoneController.$inject = ['territoryDataService', 'timezoneDataService', '$scope', '$log', '$location', 'calendarFormConstructorService'];
}());
