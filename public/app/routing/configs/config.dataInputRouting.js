(function(){
  'use strict';

  angular.module('dataInputApp')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/', {
          templateUrl: '/app/home/templates/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .when('/CalendarFileSelect', {
          templateUrl: '/app/calendar/calendarFileSelect/templates/template.calendarFileSelect.html',
          controller: 'CalendarFileSelectController',
          controllerAs: 'calendarFileSelect'
        })
        .when('/CalendarForm', {
          templateUrl: '/app/calendar/calendarForm/templates/template.calendarForm.html',
          controller: 'CalendarFormController',
          controllerAs: 'calendarForm'
        })
        .otherwise('/');

    }])
}());
