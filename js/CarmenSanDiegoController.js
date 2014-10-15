'use strict';

/* Controllers */
var app = angular.module('carmenSanDiegoApp', [])

app.controller('CarmenSanDiegoController', function ($scope) {
	/* scope */
	
	
	$scope.paisActual = "Argentina";
	
	$scope.destinosFallidos = ["Brasil","Chile","Alemania"];
	
	$scope.contactos = ["Brasil","Chile","Alemania"];
	
	$scope.villanos = [{"nombre" : "Gordo Valor"},
	                   {"nombre":"Señor Burns"},
	                   {"nombre":"Bonnie"},
	                   {"nombre":"Boudou"}
	                   ];
    
	$scope.miVillano = $scope.villanos[1];
	
	
		

	                          
		
});