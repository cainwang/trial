var dirs = angular.module('directives', []);

dirs.directive('simpleAddr', function() {
    return {
        restrict: 'AE',
        template: '<div>{{data.addr.street}}</div><div>{{data.addr.city}} {{data.addr.state}} {{data.addr.zip}}</div>'
    };
});

dirs.directive('isolatedAddr', function() {
    return {
        restrict: 'AE',
        scope: {
            addr: '=',
            name: '@',
            type: '@',
            open: '&'
        },
        templateUrl: 'tpl/dirs/addr.html'
    };
});
