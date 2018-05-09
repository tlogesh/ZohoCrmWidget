var app = angular.module("dialerZohoCrm", ["ngRoute"]);

app
  .config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
  });