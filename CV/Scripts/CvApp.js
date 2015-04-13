(function (ng) {
    //var CvApp = ng.module('CvApp', ['ngRoute']);
    var CvApp = ng.module('CvApp', ['ui.router']);


    CvApp.controller('LandingPageController', LandingPageController);
    CvApp.controller('LoginController', LoginController);
    //CvApp.controller('RegisterController', RegisterController);

    CvApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
    CvApp.factory('LoginFactory', LoginFactory);
    //CvApp.factory('RegistrationFactory', RegistrationFactory);

    //var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {
    var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

        $locationProvider.hashPrefix('!').html5Mode(true);

        //$routeProvider.
        //    when('/routeOne', {
        //        templateUrl: 'routesDemo/one'
        //    })
        //    .when('/routeTwo/:donuts', {
        //        templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        //    })
        //    .when('/routeThree', {
        //        templateUrl: 'routesDemo/three'
        //    })
        //    .when('/login', {
        //        templateUrl: '/Account/Login',
        //        controller: LoginController
        //    })
        //    .otherwise({
        //        redirectTo: '/'
        //    });

          $stateProvider
               .state('stateOne', {
                   url: '/stateOne?donuts',
                   views: {
                       "containerOne": {
                           templateUrl: '/routesDemo/one'
                       },
                       "containerTwo": {
                           templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                       },
                       "nestedView@stateOne": {
                           templateUrl: '/routesDemo/four'
                       }
                   }
               })
               .state('stateTwo', {
                   url: '/stateTwo',
                   views: {
                       "containerOne": {
                           templateUrl: '/routesDemo/one'
                       },
                       "containerTwo": {
                           templateUrl: '/routesDemo/three'
                       }
                   }
               })
               .state('stateThree', {
                   url: '/stateThree?donuts',
                   views: {
                       "containerOne": {
                           templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                       },
                       "containerTwo": {
                           templateUrl: '/routesDemo/three'
                       }
                   }
               })
               .state('loginRegister', {
                   url: '/loginRegister?returnUrl',
                   views: {
                       "containerOne": {
                           templateUrl: '/Account/Login',
                           controller: LoginController
                       }
                       //,
                       //"containerTwo": {
                       //    templateUrl: '/Account/Register',
                       //    controller: RegisterController
                       //}
                   }
               });


        $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
    }
    //configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];
    configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

    CvApp.config(configFunction);
}(window.angular));