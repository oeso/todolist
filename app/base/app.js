"use strict";

var app = angular.module("app",['ngRoute']);

app.config(['$routeProvider' , function($routeProvider){
    
    //$locationProvider.hashPrefix('');
    $routeProvider
        .when('/', { templateUrl : 'list/view.html', controller : 'listCtrl' })
        .when('/info', { templateUrl : 'info/view.html', controller : 'infoCtrl' })
        
        .otherwise({ redirectTo : '/main' })

}]);