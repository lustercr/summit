//creamos el modulo y le aplicamos la configuración
var Agenda = angular.module("Agenda", []).config(function($routeProvider){
 
    $routeProvider.when("/home", {
        controller: "notasController",
        templateUrl: "views/home.html"
    }).when("/filters", {
        controller: "filtesController",
        templateUrl: "views/filters.html"
    })
    .otherwise({redirectTo: "/home"});
 
});