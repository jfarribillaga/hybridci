'use strict';

angular.module('demo', ['ngResource', 'ui.router'])
    .config(function ($stateProvider) {

        // $routeProvider
        //     .when('/', {
        //         templateUrl: 'views/main.html',
        //         controller: 'MainCtrl'
        //     })
        //     .otherwise({
        //         redirectTo: '/'
        //     });

        var main = {
            name: 'main',
            url: '',
            views: {
                '':{
                    templateUrl: 'views/main.html'
                }
            }
        };

        var form = {
            name: 'form',
            url: '/form',
            parent: main,
            views: {
                'content': {
                    templateUrl: 'views/form.html'
                }
            }
        };

        var carousel = {
            name: 'carousel',
            url: '/carousel',
            parent: main,
            views: {
                'content': {
                    templateUrl: 'views/carousel.html'
                }
            }
        };

        var items = {
            name: 'items',
            url: '/items',
            parent: main,
            views: {
                'content': {
                    templateUrl: 'views/items.html'
                }
            }
        };

        var itemDetails = {
            name: 'itemDetails',
            url: '/details/:id',
            parent: items,
            views: {
                'itemDetails': {
                    templateUrl: 'views/items.details.html'
                }
            }
        };

        $stateProvider
            .state(main)
            .state(carousel)
            .state(form)
            .state(items)
            .state(itemDetails);
    });
