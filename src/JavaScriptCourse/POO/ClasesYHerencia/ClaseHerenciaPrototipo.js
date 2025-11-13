let todos = new Map;
let supervicion = []
let obreros = []

//----------------------------------Clase padre------------------------------------------------------
class Empleado{
    constructor(id, nombre, sueldo, correo, telefono){
        this.id = id;
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.correo = correo;
        this.telefono = telefono;
    }

    mostrarInfo(){
        console.log(`Nombre: ${this.nombre}
        Sueldo: ${this.sueldo}
        Correo: ${this.correo}
        Telefono: ${this.telefono}`);
    }
}
//----------------------------------Clase hija---------------------------------------------------------
class Obrero extends Empleado{
    constructor(id, nombre, sueldo, correo, telefono, ocupacion, maquinas){
        super(id, nombre, sueldo, correo, telefono);
        this.ocupacion = ocupacion;
        this.maquinas = maquinas;

    }

    mostrarInfo(){
        console.log(`Nombre: ${this.nombre}
            Sueldo: ${this.sueldo}
            Correo: ${this.correo}
            Telefono: ${this.telefono}
            Ocupación: ${this.ocupacion}
            Maquina: ${this.maquinas}`);

    }

}
//------------------------------------------Clase hija 2--------------------------------------------------
class Supervisor extends Empleado{
    constructor(id, nombre, sueldo, correo, telefono, especialidad){
        super(id, nombre, sueldo, correo, telefono);
        this.especialidad = especialidad;
    }
    mostrarInfo(){
        console.log(`Nombre: ${this.nombre}
            Sueldo: ${this.sueldo}
            Correo: ${this.correo}
            Telefono: ${this.telefono}
            Especialidad: ${this.especialidad}`)
    }
}
//----------------------------------Metodo para guardar en un map-----------------------------------------------------
function guardar(empleados){
    todos.set(empleados.id, empleados)

    if(empleados.sueldo < 2400){
        obreros.push(empleados.nombre)
    }
    else if(empleados.sueldo > 2400 && empleados.sueldo <= 7000){
        supervicion.push(empleados.nombre)
    }


}

//El prototipo guarda los metodos y atributos de las clases
//_____________________________________________________________________--
let ob1 = new Obrero("1O", "Pedro", "2100.10", "gar@gmail.com","7124561245", "Soldador","Miller");
guardar(ob1);
let ob2 = new Obrero("2O", "Carlos", "2300.10", "carlos@gmail.com","7224568796", "Mantenimiento","RotoMartillo");
guardar(ob2);
let ob3 = new Obrero("3O", "Sergio", "2300.10", "serg@gmail.com","7134561235", "Mantenimiento","N/A");
guardar(ob3);
let ob4 = new Obrero("4O", "Luis", "2100.10", "luis@gmail.com","7221451829", "Ayudante","N/A");
guardar(ob4);
let ob5 = new Obrero("5O", "Mario", "2200.10", "mario@gmail.com","7221216543", "Soldador","Miller 78");
guardar(ob5);
//                                                       Ingenieros
let inge1 = new Supervisor("1I", "Jhon Cena", "4500.50","jhon@gmail.com", "7221451201","Produccion")
guardar(inge1);
let inge2 = new Supervisor("2I", "UnderTaker", "6000.50","under@gmail.com", "7134569874","Industrial")
guardar(inge2);
let inge3 = new Supervisor("3I", "Brock Lesnar", "5000.50","brock@gmail.com", "7223216549","Mecanico")
guardar(inge2);
//----------------------------------------------------------------------------------------------------------------------------------------
ob1.nuwvoMetodo = function (){
    console.log(`Hola mi nombre es: ${this.nombre}`)
}

inge1.saludo = () =>{
    console.log(`Hola mi nombre es arrow: ${this.nombre}`)
}
//Agregar nuevo metodo a la instancia
ob1.nuwvoMetodo()
inge1.saludo()

Empleado.prototype.esSupervisor = function (){
    if(this.sueldo < 2400){
        console.log(`Personal de mantenimiento - ${this.nombre}`)
    }
    else if(this.sueldo > 2400 && this.sueldo <= 7000){
        console.log(`Supervisor - ${this.nombre}`)
    }
}

//----------------------------------Agregar metodos con prototype a la clase padre--------------------------------------------------
Empleado.prototype.jornada = () =>{
    console.log("Jornada completa")
}

Empleado.prototype.turno = function (){
    console.log("Mixto")
}
/*
console.log(ob1.jornada());
console.log(ob1.turno());
console.log(Array.from(todos.values()))
console.log(ob1.esSupervisor())
console.log(inge2.esSupervisor())
console.log(ob2.esSupervisor()) */
//--------------------------------Mostrar------------------------------------------------
function mostrarSupervisores(){
    for(let i = 0; i <= supervicion.length; i++){
        console.log("Supervisor: " + i + " "+ supervicion[i])
    }
}
console.log("Comprobando metodos")
mostrarSupervisores()

