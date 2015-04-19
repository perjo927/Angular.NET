﻿var LoginFactory = function ($http, $q, SessionService) {
    return function (username, password) {
        var result = $q.defer();

        var params = { grant_type: "password", userName: username, password: password };

        $http({
            method: 'POST',
            url: SessionService.apiUrl + '/token',
            transformRequest: function (obj) {
                var str = [];
                angular.forEach(obj, function(value, key) {
                    str.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
                });
                return str.join("&");
            },
            data: params,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;' }
        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }
};

LoginFactory.$inject = ['$http', '$q', 'SessionService'];
