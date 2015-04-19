;
var SessionService = function ($cookies) {
    'use strict';
    this.token = undefined;

    this.getToken = function () {
        if (!$cookies.awesomeAngularWebAppToken) {
            if (!this.token) {
                return undefined;
            }
            this.setToken(this.token);
        }
        return $cookies.awesomeAngularWebAppToken;
    };

    this.setToken = function (token) {
        this.token = token;
        $cookies.awesomeAngularWebAppToken = token;
    };

    this.apiUrl = "http://localhost:63592"; // TODO: Substitutions / endpoints
};

SessionService.$inject = ['$cookies'];
