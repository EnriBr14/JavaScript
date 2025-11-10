const person = new Map();

// Agregar valores
person.set("Jhon Cena", 45);
person.set("Under", 42);
person.set("Penta", 40);
person.set("Rey", 34);

// Acceder
console.log("Llaves")
console.log(person.keys())
console.log("Valores")
console.log(person.values())

console.log("Entires")
console.log(person.entries())

console.log("Entrar a un valor")
console.log(person.get("Jhon Cena"));


let user = "Under";
//Con for each (value,key) aunque al crear un mapa es (key, value)
person.forEach((edad, nombre) => {
    //Devuelve el valor de Jhon Cena que es 45
    if (edad === person.get(user)){
        console.log("Si esta registrado")
        //Aqui si imprime el nombre y edad ya que no usamos el get
        console.log(`${nombre}`);
        console.log(`Su edad es ${edad}`)

    }else{
        console.log("No esta registrado")

    }

})




/*
console.log(mapa.get("nombre")); // "Carlos"

// Verificar si existe una clave
console.log(mapa.has("edad")); // true

// Recorrer todos los pares
mapa.forEach((valor, clave) => {
    console.log(clave + ": " + valor);
});
*/