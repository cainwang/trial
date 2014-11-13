var services = angular.module('services', []);

services.provider('Visits', function() {
    var count = 0;

    return {
        setVisits: function(value) {
            count = value;
        },
        $get: function() {
            return {
                getCount: function() {
                    return count;
                },
                visit: function() {
                    return ++ count;
                }
            };
        }
    };
});

services.factory('Features', function($http) {
    return {
        get: function() {
            return $http.get('data/features.json');
        }
    };
});
