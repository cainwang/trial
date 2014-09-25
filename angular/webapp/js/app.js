var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'controllers']);

app.config(function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/modal'
    }).when('/modal', {
        templateUrl: 'tpl/modal.html',
        controller: 'ModalController'
    }).when('/tabs', {
        templateUrl: 'tpl/tabs.html',
        controller: 'TabsController'
    }).when('/alerts', {
        templateUrl: 'tpl/alerts.html',
        controller: 'AlertsController'
    });
});
