'use strict';

angular.module('demo')
  .factory('NearbyStopsService', function($resource, $q){

    function get(){
        var defer = $q.defer();

        $resource('data/nearbyStops.json?'+Math.random()).get(function(response){
            // cachedResponse = response;
            defer.resolve( response );
        },function(error){
            defer.reject( error );
        });

        return defer.promise;
    }

    return {
        get: get
    };
});
