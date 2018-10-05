(function(){
  'use strict';

  function companyNameId() {
    return {
      restrict: 'E',
      templateUrl: '/app/calendar/companyNameId/partials/partial.companyNameId.html',
      controller: 'CompanyNameIdController',
      controllerAs: 'companyNameId',
      bindToController: true,
      scope: {
        companyName: '=',
        companyId: '='
      }
    }
  }
  angular.module('calendarApp')
    .directive('companyNameId', [companyNameId]);

}());
