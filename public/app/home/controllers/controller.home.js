(function(){
  'use strict';

  angular.module('calendarApp')
    .controller('HomeController', ['territoryDataService', '$scope', '$log', HomeController]);

    function HomeController(territoryDataService, $scope, $log) {

      var vm = $scope;

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
}());
