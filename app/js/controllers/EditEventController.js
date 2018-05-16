'use strict';


eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData){

      $scope.event = {
        name:"New Event",
        date:"01/01/2019"
      };
        
        $scope.saveEvent = function (event, newEventForm) {
            if(newEventForm.$valid){
                 eventData.save(event)
                    .$promise.then(function(response) { 
                        console.log('success', response)
                    });

             }
        }
       
        $scope.cancelEdit = function(){
            window.location = '/EventDetails.html';
        }

    }
);