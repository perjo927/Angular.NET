
var LoginController = function ($scope, $location, LoginFactory, SessionService) {
    $scope.loginForm = {
        userName: undefined,
        password: undefined,
        errorMessage: undefined
    };

    $scope.login = function () {
        LoginFactory($scope.loginForm.userName, $scope.loginForm.password)
        .then(function (response) {
            SessionService.setToken(response.access_token);
            $location.path('/');
        }, function (response) {
            $scope.loginForm.errorMessage = response.error_description;
        });
    }
}
LoginController.$inject = ['$scope', '$location', 'LoginFactory', 'SessionService'];


