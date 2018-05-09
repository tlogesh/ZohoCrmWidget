var app = angular.module("dialerZohoCrm", ["ngRoute"]);

app
  .config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./templates/login.html"
    })
  })
  .controller('loginController',loginController);

function loginController(){
  console.log('this controller is loaded properly');
}