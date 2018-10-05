(function(){
    'use strict';

    function calendarTypesValidationService($q) {

        return {
            calendarTypesTrackerChange: calendarTypesTrackerChange
        }

        function calendarTypesTrackerChange() {
            var promise = $q(function(resolve, reject) {
                if  (
                        (
                            value !== 'company'
                          &&
                            vm.selectedCalendarTypesTracker.company
                        )
                      ||
                        (
                                value === 'company'
                            &&
                                vm.selectedCalendarTypesTracker.company
                            &&
                            (
                                    vm.selectedCalendarTypesTracker.companyService
                              ||
                                    vm.selectedCalendarTypesTracker.ipcService
                              ||
                                    vm.selectedCalendarTypesTracker.service
                              ||
                                    vm.selectedCalendarTypesTracker.servicePayment
                              ||
                                    vm.selectedCalendarTypesTracker.ipc
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
            });
            return promise;
        }


    }

    angular.module('calendarApp')
        .factory('calendarTypesValidationService', calendarTypesValidationService);
    calendarTypesValidationService.$inject = ['$q'];

}());
