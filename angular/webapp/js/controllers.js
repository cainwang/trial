var ctrls = angular.module('controllers', []);

ctrls.controller('ModalController', function($scope) {
    console.log('controller');
    $scope.data = {
        content: 'This is a modal dialog.'
    };
});
