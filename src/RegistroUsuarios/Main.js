let Usuario = require("./Usuarios");
let Servicio = require("./Servicio");


//Usuarios registrados
let u1 = new Usuario(1, "Enrique Rojas", "gar@gmail.com");
Servicio.registrar(u1.id, u1)
let u2 = new Usuario(2, "Sergio Sanchez", "gar@gmail.com");
Servicio.registrar(u2.id, u2)


u1.nombre = "Enrique Rojas Garcia"
console.log(u1.correo)
console.log(JSON.stringify(Servicio.mostrar()));


