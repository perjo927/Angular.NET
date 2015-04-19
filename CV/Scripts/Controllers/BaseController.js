;
var BaseController = function ($scope, SessionService) {
    'use strict';
    $scope.helloAgain = 'Hello Angular 1.3!';

    $scope.loggedIn = function () {
        return SessionService.getToken() !== undefined;
    };
};
BaseController.$inject = ['$scope', 'SessionService'];