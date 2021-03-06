(function(){
  'use strict';

  angular.module('calendarApp')
    .factory('timezoneDataService', ['$http', '$q', timezoneDataService]);

  function timezoneDataService($http, $q) {

    return {
      getAllTimezones: getAllTimezones
    };

    function getAllTimezones() {
      return $http({
        method: 'GET',
        url: 'app/territoryTimezone/jsonFiles/timezones.json'
      })
        .then(sendTimezoneResponseData)
        .catch(sendGetTimezonesError);
    }

    function sendTimezoneResponseData(response) {
      return response.data;
    }

    function sendGetTimezonesError(response) {
      return $q.reject('Error retrieving Timezones. (HTTP status: ' + response.status + ')');
    }

  }
}());
