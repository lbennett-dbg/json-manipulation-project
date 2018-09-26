(function(){
  'use strict';

  function TimezoneController(timezoneDataService, $scope, $log, $location) {

    var vm = this;

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
    .controller('TimezoneController', TimezoneController);
    TimezoneController.$inject = ['timezoneDataService', '$scope', '$log', '$location'];
}());
