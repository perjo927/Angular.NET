(function (ng) {
    var CvApp = ng.module('CvApp', ['ngRoute', 'ngCookies']);

    CvApp.controller('LandingPageController', LandingPageController);
    CvApp.controller('BaseController', BaseController);
    CvApp.controller('LoginController', LoginController);
    CvApp.controller('RegisterController', RegisterController);
    CvApp.controller('ValuesController', ValuesController);

    CvApp.service('SessionService', SessionService);

    CvApp.factory('LoginFactory', LoginFactory);
    CvApp.factory('RegisterFactory', RegisterFactory);
    CvApp.factory('GetValuesFactory', GetValuesFactory);

    var configFunction = function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: '/Home/Login',
                controller: LoginController
            })
            .when('/register', {
                templateUrl: '/Home/Register',
                controller: RegisterController
            })
            .when('/values', {
                templateUrl: '/Home/Values',
                controller: ValuesController
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    configFunction.$inject = ['$routeProvider'];

    CvApp.config(configFunction);
}(window.angular));