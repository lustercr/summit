//modelo notasModel
//un servicio viene a ser un modelo
Agenda.service("notasModel", function(){
 
    this.getNotas = function(){
        return [
            {
                id : 0,
                nombre : "Israel Salas",
                edad : "32 años"
            },
            {
                id : 1,
                nombre : "Andrés López",
                edad : "24 años"
            },
            {
                id : 2,
                nombre : "Juan Rodríguez",
                edad : "28 años"
            },
            {
                id : 3,
                nombre : "Pepito",
                edad : "18 años"
            },
            {
                id : 4,
                nombre : "Manuel",
                edad : "45 años"
            }
        ]
    }
 
});