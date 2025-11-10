let lista = new Map()
//Metodo -set(clave,valor)- Agrega datos al Map
lista.set(1, "Mistico");
lista.set(2, "Cibernetico");
lista.set(3, "Penta");
lista.set(4, "Dragon Li");
lista.set(5, "Caristico");
lista.set(6, "Pagano");
lista.set(7, "Psyco Clown");
lista.set(8, "Dominik misterio");
lista.set(9, "Rey Misterio");
lista.set(10, "Mil Mascaras");

//Metodos principales----------------------------------------------------------------------------
//Imprime
console.log(lista)

//Imprimir un valor
console.log(lista.get(1)); //----------------> Mistico

//Has-------Verifica si tiene la clave
console.log(lista.has(1));//----------------> True

//Elimina un elemento por su clave. Devuelve true si se eliminó.
console.log(lista.delete(1));//true de que elimino

//Clear: lipia todo el array
console.log(lista.size);


//Metodos iteracion------------------------------------------------------------------------------
//Iterar por claves para mostrar los valores-------------------------
for(let claves of lista.keys()){
    console.log(lista.get(claves));
}

//Iterar por valores
console.log("Iteracion por valores");
for(let valores of lista.values()){
    console.log(valores)
}

for(let [k,v] of lista.entries()){
    console.log(k, v)
}

//Valicion
let luch = "Penta"
for(let luchador of lista.values()){
    if(luchador === luch){
        console.log("Registrado")
    }
    else{
        console.log("No resgitrado")
    }
}
