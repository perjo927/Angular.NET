var CvApp = angular.module('CvApp', ['ngRoute']);

CvApp.controller('LandingPageController', LandingPageController);
CvApp.controller('LoginController', LoginController);
//CvApp.controller('RegisterController', RegisterController);

CvApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
CvApp.factory('LoginFactory', LoginFactory);
//CvApp.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function(params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        });
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

CvApp.config(configFunction);