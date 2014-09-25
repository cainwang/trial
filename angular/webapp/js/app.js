var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'controllers']);

app.config(function($routeProvider) {
    console.log('test');
    $routeProvider.when('/modal', {
        templateUrl: 'tpl/modal.html',
        controller: 'ModalController'
    }).otherwise({
        redirectTo: '/modal'
    });
});
