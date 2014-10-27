var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'controllers']);

app.config(function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/modals'
    }).when('/modals', {
        templateUrl: 'tpl/modal.html',
        controller: 'ModalController'
    }).when('/tabs', {
        templateUrl: 'tpl/tabs.html',
        controller: 'TabsController'
    }).when('/alerts', {
        templateUrl: 'tpl/alerts.html',
        controller: 'AlertsController'
    }).when('/buttons', {
        templateUrl: 'tpl/buttons.html',
        cotnroller: 'ButtonsController'
    });
});
