var app = angular.module("dialerZohoCrm", ["ngRoute"]);

app
  .config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./templates/login.html"
    })
  })
  .controller["loginController",loginController];