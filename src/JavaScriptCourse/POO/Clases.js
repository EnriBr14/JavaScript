class Empleados{
    constructor(id, nombre, apellido, sueldo){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sueldo = sueldo;
    }
    mostrarInfo(){
        console.log("Datos del empleado")
        console.log(`Nombre: ${this.nombre} + Apellido: ${this.apellido} + sueldo: ${this.sueldo}`);
    }
}

let emlpeado = []

//Metodo principal
let p1 = new Empleados("1", "Enrique", "Garcia", 2100.50);
emlpeado.push(p1);
let p2 = new Empleados("2", "Sergio", "Jimenez", 2100);
emlpeado.push(p2);
let p3 = new Empleados("3", "Carlos", "Cena", 3200);
emlpeado.push(p3);
let p4 = new Empleados("4", "Hector", "Cruz", 6100.50);
emlpeado.push(p4);
let p5 = new Empleados("5", "Daniel", "V", 3300);
emlpeado.push(p5);
console.log("Lista de de empleado");
emlpeado.forEach(e =>{
    if(e.sueldo <= 2500){
        console.log(`${e.nombre} es obrero`)
    }else if(e.sueldo > 2500 && e.sueldo <= 5000 ){
        console.log(`${e.nombre} es supervisor`)
    }
    else if(e.sueldo > 5000){
        console.log(`${e.nombre} es jefe de operacion`)

    }

});

class obrero extends Empleados{
    constructor(id, nombre, apellido, sueldo, maquina) {
        super(id, nombre, apellido, sueldo);
        this.maquina = maquina;
    }

}

let ob1 = new obrero(6, "Penta", "Cero MIedo", 2500, "Taladro");
emlpeado.push(ob1);
ob1.mostrarInfo()


emlpeado.delete("1")
emlpeado.forEach(e =>{console.log(`${e.nombre}`)})


