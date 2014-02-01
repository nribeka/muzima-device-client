'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/person', {templateUrl: 'partials/person.html', controller: 'PersonCtrl'});
        $routeProvider.when('/device', {templateUrl: 'partials/device.html', controller: 'DeviceCtrl'});
        $routeProvider.when('/log', {templateUrl: 'partials/log.html', controller: 'LogCtrl'});
        $routeProvider.otherwise({redirectTo: '/login', templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
    }]);
