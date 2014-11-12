var filters = angular.module('filters', []);

filters.filter('gmapAddr', function() {
    return function(addr) {
        return addr.street + ',+' + addr.city + ',+' + addr.state;
    };
});