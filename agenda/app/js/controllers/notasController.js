//controlador llamado notasController al que inyectamos el modelo notasModel
Agenda.controller("notasController", function($scope, notasModel){
 
    //obtenemos todas las notas
    $scope.notas = notasModel.getNotas();

    var limpiarDatosNuevoContacto = function(){
	    $scope.nuevoContacto = {
	    	id: '',
	   		nombre: '',
	   		telefono: ''
	    }    	
    }

    $scope.remover = function(index){
    	$scope.notas.splice(index, 1);
    }

    $scope.agregar = function(){
    	$scope.notas.push($scope.nuevoContacto);
    	limpiarDatosNuevoContacto();
    }
 
})