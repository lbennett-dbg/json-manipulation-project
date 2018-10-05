(function(){
  'use strict';

  function calendarTypesDataService($http, $q) {

    return {
      getCalendarTypeData: getCalendarTypeData
    }

    //get calendarType data
    function getCalendarTypeData() {
      return $http({
        method: 'GET',
        url: 'app/calendar_app/calendarForm/json/calendarType.json'
      })
        .then(sendCalendarTypeResponseData)
        .catch(sendCalendarTypeError);
    }

    function sendCalendarTypeResponseData(response) {
      return response.data;
    }

    function sendCalendarTypeError(response) {
      return $q.reject('Error retrieving Calendar Type information. (HTTP status: ' + response.status + ')');
    }


  }
  angular.module('calendarApp')
    .factory('calendarTypesDataService', calendarTypesDataService);
  calendarTypesDataService.$inject = ['$http', '$q'];
}());
