(function(){
  'use strict';

  function TerritoryController(territoryDataService, $scope, $log, $location) {

    var vm = this;
    var territories;
    
    vm.allTerritories = territories

    territoryDataService.getAllTerritories()
      .then(getTerritoriesSuccess)
      .catch(errorTerritoriesCallback);

    function getTerritoriesSuccess(territories) {
      territories = territories;
    }

    function errorTerritoriesCallback(errorMsg) {
      $log.error('Error Message: ' + errorMsg);
    }

  }

  angular.module('dataInputApp')
    .controller('TerritoryController', TerritoryController);
    TerritoryController.$inject = ['territoryDataService', '$scope', '$log', '$location'];
}());
