//modelo notasModel
//un servicio viene a ser un modelo
Agenda.service("notasModel", function(){
 
    this.getNotas = function(){
        return [
            {
                nombre : "Israel Salas",
                edad : "32 años"
            },
            {
                nombre : "Andrés López",
                edad : "24 años"
            },
            {
                nombre : "Juan Rodríguez",
                edad : "28 años"
            },
            {
                nombre : "Pepito",
                edad : "18 años"
            },
            {
                nombre : "Manuel",
                edad : "45 años"
            }
        ]
    }
 
});