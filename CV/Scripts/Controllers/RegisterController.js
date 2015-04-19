;
var RegisterController = function ($scope, LoginFactory, RegisterFactory, SessionService) {
    'use strict';

    $scope.registerForm = {
        userName: undefined,
        password: undefined,
        confirmPassword: undefined,
        errorMessage: undefined
    };

    $scope.register = function () {
        RegisterFactory($scope.registerForm.userName,
                       $scope.registerForm.password,
                       $scope.registerForm.confirmPassword)
        .then(function () {
            LoginFactory($scope.registerForm.userName,
                        $scope.registerForm.password)
            .then(function (response) {
                SessionService.setToken(response.access_token);
            }, function (response) {
                $scope.registerForm.errorMessage = response;
            });
        }, function (response) {
            $scope.registerForm.errorMessage = response;
        });
    };
}
RegisterController.$inject = ['$scope', 'LoginFactory', 'RegisterFactory', 'SessionService'];