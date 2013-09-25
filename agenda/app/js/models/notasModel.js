//modelo notasModel
//un servicio viene a ser un modelo
Agenda.service("notasModel", function(){
 
    this.getNotas = function(){
        return [
            {
                nombre : "Israel Salas",
                telefono : "8890977"
            },
            {
                nombre : "Andrés López",
                telefono : "887987"
            },
            {
                nombre : "Juan Rodríguez",
                telefono : "8787687"
            },
            {
                nombre : "Pepito",
                telefono : "9868757"
            },
            {
                nombre : "Manuel",
                telefono : "96675765
            }
        ]
    }
 
});