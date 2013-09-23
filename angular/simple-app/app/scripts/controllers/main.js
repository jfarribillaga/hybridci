'use strict';

angular.module('demo')
    .controller('MainCtrl', function ($scope, Helpers) {
        $scope.model = {
            name: 'Andres Sainz'
        };

        $scope.changePage = function(newPath){
            Helpers.changePage( newPath );
        };

    })
    .controller('FormCtrl', function($scope){
        $scope.model = {
            name: 'overrriden in Form Controller scope'
        };
        $scope.$watch(function(){
            console.log('*********** here ***********');
        });
    })
    .controller('InnerFormController', function(){})
    .controller('CarouselCtrl', function(){})
    .controller('ItemsCtrl', function($scope, NearbyStopsService, Helpers){
        NearbyStopsService.get().then(function(response){
            $scope.items = response.nearbyStops;
        },function(error){
            console.error(error);
        });

        $scope.showDetails = function(item){
            Helpers.changePage('/items/details/' + item.stopId);
        };
    })
    .controller('ItemDetailsCtrl', function($scope, $stateParams){
        var itemId = $stateParams.id;
        $scope.itemDetails = {
            title: 'The title of the item ' + itemId,
            description: 'this is the description of the item #' + itemId
        };
    });
