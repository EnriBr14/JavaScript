//Ciclo while
//Contador
console.log("Contador con ciclo While")
let contador = 0;
while(contador < 5){
    console.log("Numero: "+ contador);
    contador++;
}

//Ciclo For
console.log("Contador con ciclo For\n");
for(let i = 0; i < 5; i++){
    console.log("Numero: "+ i);
}

//Recorrer un array
const p1 = {
    nombre: "Pagano",
    empresa: "AAA",
    numero: "12",
}
const p2 = {
    nombre: "John Cena",
    empresa: "WWE",
    numero: "13",
}
const p3 = {
    nombre: "Mistico",
    empresa: "CMLL",
    numero: "14",
}
let arre = []
arre.push(p1)
arre.push(p2)
arre.push(p3)

for(let nombreLuchador = 0; nombreLuchador < arre.length; nombreLuchador++) {
    console.log("Nombre "+ arre[nombreLuchador].nombre +
    " - Empresa:" + arre[nombreLuchador].empresa);
}

