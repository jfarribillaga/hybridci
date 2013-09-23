'use strict';

angular.module('demo')
    .directive('custombutton', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                index: '=customButtonIndex',
                changePage: '&customButtonClick'
            },
            template: '<button class="pure-button" ng-class="disabledClass" ng-click="{{changePage(1)}}" ng-transclude></button>',
            link: function(){}
        };
    });
