(function(){
  'use strict';

  angular.module('dataInputApp')
    .factory('territoryDataService', ['$http', '$q', territoryDataService]);

  function territoryDataService($http, $q) {

    return {
      getAllTerritories: getAllTerritories
    };

    function getAllTerritories() {
      return $http({
        method: 'GET',
        url: 'app/calendar_app/sharedapp-territory/json/territories.json'
      })
        .then(sendTerritoryResponseData)
        .catch(sendGetTerritoriesError);
    }

    function sendTerritoryResponseData(response) {
      return response.data;
    }

    function sendGetTerritoriesError(response) {
      return $q.reject('Error retrieving territories. (HTTP status: ' + response.status + ')');
    }

  }
}());
