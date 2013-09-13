'use strict';

angular.module('demo')
  .factory('Helpers', function($location ){

    function changePage( newPath ){
        $location.path( newPath );
    }

    return {
        changePage: changePage
    };
});