(function(){
  'use strict';

  function TerritoryController(territoryDataService, $scope, $log, $location) {

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

  }

  angular.module('dataInputApp')
    .controller('TerritoryController', TerritoryController);
    TerritoryController.$inject = ['territoryDataService', '$scope', '$log', '$location'];
}());
