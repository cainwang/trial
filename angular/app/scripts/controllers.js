var ctrls = angular.module('controllers', []);

ctrls.controller('ModalController', function($scope, $modal) {
    $scope.data = {
        items: ['One', 'Two', 'Three'],
        selection: ''
    };

    $scope.openModal = function() {
        var modal = $modal.open({
            templateUrl: 'tpl/modal-content.html',
            controller: 'ModalDialogController',
            resolve: {
                items: function() {
                    return $scope.data.items;
                }
            }
        });

        modal.result.then(function(item) {
            $scope.data.selection = item;
        }, function() {
            console.log('modal dismissed');
        });
    };
});

ctrls.controller('ModalDialogController', function($scope, $modalInstance, items) {
    $scope.data = {
        content: 'This is a modal dialog.',
        items: items,
        selection: items[0]
    };

    $scope.ok = function() {
        $modalInstance.close($scope.data.selection);
    };
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});

ctrls.controller('TabsController', function($scope) {
    $scope.data = {
        tabs: [{
            heading: 'Tab 1',
            content: 'This is tab 1.'
        }, {
            heading: 'Tab 2',
            content: 'This is tab 2.'
        }]
    };

    $scope.selectTab = function(index) {
        $scope.data.content = 'Tab ' + index;
    };
});

ctrls.controller('AlertsController', function($scope) {
    $scope.data = {
        alerts: [{
            type: 'danger',
            message: 'A dangerous message!'
        }, {
            type: 'success',
            message: 'A success message.'
        }]
    };

    $scope.addAlert = function() {
        $scope.data.alerts.push({
            message: 'A new message.'
        });
    };

    $scope.closeAlert = function(alert, index) {
        $scope.data.alerts.splice(index, 1);
    };
});

ctrls.controller('FeaturesController', function($scope, $rootScope, $location, $http) {
    function updateFeatureSelection(features) {
        var path = $location.path();

        features.forEach(function(feature) {
            delete feature.selected;

            if (feature.path == path) {
                feature.selected = true;
            }
        });
    }

    $rootScope.$on('$routeChangeStart', function() {
        var features = $scope.data.features;
        if (features) {
            updateFeatureSelection(features);
        }
    });

    $http.get('data/features.json').success(function(features) {
        $scope.data.features = features;
        updateFeatureSelection(features);
    });

    $scope.data = {};
});

ctrls.controller('ButtonsController', function($scope) {
    $scope.data = {
        selectionModel: {
            left: false,
            middle: true,
            right: false
        }
    };

    // Fix the toggle button exception.
    this.toggleEvent = 'click';
    this.activeClass = 'active';
});

ctrls.controller('LocationController', function($scope, $location) {
    $scope.$location = $location;

    $scope.changeToRoot = function() {
        var ret = $location.path('/');
        console.log(ret);
    };
    $scope.changeSearch = function() {
        $location.search('key', 'value');
    };
    $scope.changeHash = function() {
        $location.hash('hashValue');
    };
});
