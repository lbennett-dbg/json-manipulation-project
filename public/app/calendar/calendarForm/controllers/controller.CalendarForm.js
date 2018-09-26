(function(){
  'use strict';

    function CalendarFormController($scope, $location, $log, calendarTypesDataService, $filter) {

        //local variables
        var vm = this;

        //view model variables
        vm.selectedCalendarTypesTracker = {};
        vm.newCalendar = {servicetype: "StandardTermPatentRenewal"}; //new calendar object



        calendarTypesDataService.getCalendarTypeData()
            .then(getCalendarTypeDataSuccess)
            .catch(errorCalendarTypeDataCallback);

        function getCalendarTypeDataSuccess(calendarType) {
            vm.possibleCalendarTypes = calendarType;
        }

        function errorCalendarTypeDataCallback(errorMsg) {
            $log.error('Error Message: ' + errorMsg);
        }




        vm.onSelectedCalendarTypesTrackerChange = function(value) {
            if ( value !== 'company' && vm.selectedCalendarTypesTracker.company ) {
                console.log("You cannot select anything else with Company");
                // return true;

            } else if ( value !== 'companyService' && vm.selectedCalendarTypesTracker.companyService ) {
                console.log("You cannot select anything else with Company Service");
                // return true;

            } else if ( value !== 'ipc' && vm.selectedCalendarTypesTracker.ipc ) {
                console.log('You cannot select anything else with IPC');

            } else if ( value !== 'ipcService' && vm.selectedCalendarTypesTracker.ipcService ) {
                console.log('You cannot select anything else with IPC Service');


            } else if   (
                            value !== 'service'
                          &&
                            value !== 'servicePayment'
                          &&
                            vm.selectedCalendarTypesTracker.service
                          &&
                            vm.selectedCalendarTypesTracker.servicePayment
                        ) {
                            console.log('You cannot select anything else with Service and Service Payment');

            } else if   (
                            value !== 'service'
                          &&
                            value !== 'servicePayment'
                          &&
                            vm.selectedCalendarTypesTracker.service
                          &&
                            !vm.selectedCalendarTypesTracker.servicePayment
                        ) {
                            console.log('You can only select Service Payment with Service');
            } else if   (
                            value !== 'service'
                          &&
                            value !== 'servicePayment'
                          &&
                            vm.selectedCalendarTypesTracker.servicePayment
                          &&
                            !vm.selectedCalendarTypesTracker.service
                        ) {
                            console.log('You can only select Service with Service Payment');
                        }

            if  (
                    (
                        (
                            value !== 'company'
                          &&
                            vm.selectedCalendarTypesTracker.company
                        )
                      ||
                        (
                            value !== 'companyService'
                          &&
                            vm.selectedCalendarTypesTracker.companyService
                        )
                      ||
                        (
                            value !== 'ipc'
                          &&
                            vm.selectedCalendarTypesTracker.ipc
                        )
                      ||
                        (
                            value !== 'ipcService'
                          &&
                            vm.selectedCalendarTypesTracker.ipcService
                        )
                    )
                  ||
                    (
                        (
                            (
                                value === 'company'
                              &&
                                vm.selectedCalendarTypesTracker.company
                            )
                          ||
                            (
                                value === 'companyService'
                              &&
                                vm.selectedCalendarTypesTracker.companyService
                            )
                          ||
                            (
                                value === 'ipc'
                              &&
                                vm.selectedCalendarTypesTracker.ipc
                            )
                          ||
                            (
                                value === 'ipcService'
                              &&
                                vm.selectedCalendarTypesTracker.ipcService
                            )
                        )
                      &&
                        (
                            vm.selectedCalendarTypesTracker.service
                          ||
                            vm.selectedCalendarTypesTracker.servicePayment
                        )
                    )
                ) {
                      vm.selectedCalendarTypesTracker[value] = false;
                  }
                vm.showCompanyTypeInputs = (
                                            vm.selectedCalendarTypesTracker.company
                                          ||
                                            vm.selectedCalendarTypesTracker.companyService
                                            );
                vm.showTerritoryDropDown = (
                                            vm.selectedCalendarTypesTracker.companyService
                                           ||
                                            vm.selectedCalendarTypesTracker.ipcService
                                           ||
                                            vm.selectedCalendarTypesTracker.service
                                           ||
                                            vm.selectedCalendarTypesTracker.servicePayment
                                            );
        }




      //calendar Rules
      //show Rules
      vm.showRules = function(rules) {
        if(rules === 'calendarRules') {
          vm.showCalendarRulesOptions = !vm.showCalendarRulesOptions;
          if ( vm.calendarRulesOptions && vm.holidayRulesOptions ) {
            vm.holidayRulesOptions = false;
          }
        } else if(rules === 'holidayRules') {
          vm.holidayRulesOptions = !vm.holidayRulesOptions;
          if ( vm.calendarRulesOptions && vm.holidayRulesOptions ) {
            vm.calendarRulesOptions = false;
          }
        }
      }

      //filters the datetime into a time value of hh:mm:ss
      vm.dateTimeFilter = function(row) {
        //calendarfilters
        row.starttime = $filter('date')(row.calendarStartDateTime, 'HH:mm:ss');
        row.endtime = $filter('date')(row.calendarEndDateTime, 'HH:mm:ss');
        row.validfrom = $filter('date')(row.calendarValidfromDateTime, 'yyyy-MM-dd HH:mm:ss');
        row.validuntil = $filter('date')(row.calendarValiduntilDateTime, 'yyyy-MM-dd HH:mm:ss');
        //holidayFilters
        row.startDate = $filter('date')(row.holidayStartDateTime, 'yyyy-MM-dd');
        row.endDate = $filter('date')(row.holidayEndDateTime, 'yyyy-MM-dd');
        row.startTime = $filter('date')(row.holidayStartTimeDateTime, 'HH:mm:ss');
        row.endTime = $filter('date')(row.holidayEndTimeDateTime, 'HH:mm:ss');
        row.year = $filter('date')(row.holidayYearDateTime, 'yyyy');
      }

      function deleteCalendarRulesUnwantedProperties() {
        for (var i = 0; i < vm.createCalendarOutput.calendarRules.length; i++) {
          delete vm.createCalendarOutput.calendarRules[i].calendarStartDateTime;
          delete vm.createCalendarOutput.calendarRules[i].calendarEndDateTime;
          delete vm.createCalendarOutput.calendarRules[i].calendarValidfromDateTime;
          delete vm.createCalendarOutput.calendarRules[i].calendarValiduntilDateTime;
          delete vm.createCalendarOutput.calendarRules[i].showingValidInputs;
        }
      }

      function deleteHolidayRulesUnwantedProperties() {
        for (var i = 0; i < vm.createCalendarOutput.holidayRules.length; i++) {
          delete vm.createCalendarOutput.holidayRules[i].holidayStartDateTime;
          delete vm.createCalendarOutput.holidayRules[i].holidayEndDateTime;
          delete vm.createCalendarOutput.holidayRules[i].holidayStartTimeDateTime;
          delete vm.createCalendarOutput.holidayRules[i].holidayEndTimeDateTime;
          delete vm.createCalendarOutput.holidayRules[i].holidayYearDateTime;
        }
      }

      function deleteUnwantedProperties() {
        if ( vm.createCalendarOutput.calendarRules && vm.createCalendarOutput.holidayRules ) {
          deleteCalendarRulesUnwantedProperties();
          deleteHolidayRulesUnwantedProperties();
        } else if ( vm.createCalendarOutput.calendarRules ) {
            deleteCalendarRulesUnwantedProperties();
        } else if ( vm.createCalendarOutput.holidayRules ) {
            deleteHolidayRulesUnwantedProperties();
          }
      }

      function createRules(ruleType) {
        if ( ruleType === 'calendar' ) {
          vm.calendarRules = [];
          vm.calendarRules.push(rulesTemplate(ruleType));
        } else if ( ruleType === 'holiday' ) {
          vm.holidayRules = [];
          vm.holidayRules.push(rulesTemplate(ruleType));
        }
      }

      //calendarRules
      function rulesTemplate(array) {
        if( array === 'calendar' ) {
          var calendarRules = {
                "dayoftheweek": "",
                "starttime": "",
                "endtime": "",
                "validfrom": '',
                "validuntil": ''
              };
          return calendarRules
        } else if( array === 'holiday' ) {
            var holidayRules = {
                  "startDate": "",
                  "startTime": "",
                  "endDate": "",
                  "endTime": "",
                  "year": "",
                  "type": "holiday",
                  "_holidayName": ""
                }
          return holidayRules
        }
      }

      //calendarRules array
      createRules('calendar');

      //holidayRules array
      createRules('holiday');

      //starts out false
      //show valid showValidInputs
      vm.showValidInputs = function(row) {
        row.showingValidInputs = !row.showingValidInputs
      }

      //adds a new day in the calendarRules array
      vm.addAnotherDay = function(array) {
          var newDay = [];
        if( array === 'calendar' ) {
          newDay = rulesTemplate(array);
          vm.calendarRules.push(newDay);
        } else if ( array === 'holiday' ) {
          newDay = rulesTemplate(array);
          vm.holidayRules.push(newDay);
        }
      }

      vm.addRules = function(rules) {
        if ( vm.newCalendar.timezone ) {
          if ( rules === 'calendar' ) {
              vm.newCalendar.calendarRules = vm.calendarRules;
            } else if ( rules === 'holiday' ) {
                vm.newCalendar.holidayRules = vm.holidayRules;
            }
            vm.chosenCalendarTypesList = [];
            Object.keys(vm.selectedCalendarTypesTracker).forEach(function(key) {
              if( vm.selectedCalendarTypesTracker[key] ) {
                vm.chosenCalendarTypesList.push(key);
              }
            });
            vm.newCalendar.calendarType = vm.chosenCalendarTypesList;
            vm.createCalendarOutput = angular.copy(vm.newCalendar);
            deleteUnwantedProperties();
            vm.createCalendarOutput = JSON.stringify(vm.createCalendarOutput, null, 4);
          } else if ( !vm.newCalendar.timezone ) {
            alert('Please enter a Time Zone');
        }
      }





      vm.clearRules = function(rules) {
        if ( rules === 'calendar' && vm.createCalendarOutput ) {
          vm.createCalendarOutput = JSON.parse(vm.createCalendarOutput);
          delete vm.newCalendar.calendarRules;
          delete vm.createCalendarOutput.calendarRules;
          vm.createCalendarOutput = JSON.stringify(vm.createCalendarOutput, null, 4);
          delete vm.calendarRules;
          createRules(rules);
        } else if ( rules === 'calendar' ) {
            delete vm.newCalendar.calendarRules;
            delete vm.calendarRules;
            createRules(rules);
        } else if ( rules === 'holiday' && vm.createCalendarOutput ) {
            vm.createCalendarOutput = JSON.parse(vm.createCalendarOutput);
            delete vm.newCalendar.holidayRules;
            delete vm.createCalendarOutput.holidayRules;
            vm.createCalendarOutput = JSON.stringify(vm.createCalendarOutput, null, 4);
            delete vm.holidayRules;
            createRules(rules);
        } else if ( rules === 'holiday' ) {
            delete vm.newCalendar.holidayRules;
            delete vm.holidayRules;
            createRules(rules);
        }
        $log.info(rules + 'Rules have been cleared.');
      }

      function deleteEverythingButOutput() {
        delete vm.newCalendar;
        delete vm.calendarRules;
        delete vm.holidayRules;
        vm.newCalendar = {
          servicetype: "StandardTermPatentRenewal"
        };
        createRules('calendar');
        createRules('holiday');
        vm.selectedCalendarTypesTracker = {};
        $log.info('All Calendars Cleared.');
      }

      vm.deleteAll = function() {
        if ( vm.createCalendarOutput ) {
          vm.createCalendarOutput = JSON.parse(vm.createCalendarOutput);
          delete vm.createCalendarOutput;
          deleteEverythingButOutput();
        } else if ( !vm.createCalendarOutput ) {
          deleteEverythingButOutput();
        }
        vm.showTerritoryDropDown = false;
      }



    }
    angular.module('calendarApp')
      .controller('CalendarFormController', CalendarFormController);
      CalendarFormController.$inject = ['$scope', '$location', '$log', 'calendarTypesDataService', '$filter'];
}());
