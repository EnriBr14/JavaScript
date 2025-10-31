//Variable para inicializar el contador
let contador = 1
/*
while(contador <= 3){
    console.log(contador)
    contador++
}
console.log("Fin del ciclo while");
*/
console.log("Ciclo do-while")
do{
    console.log(contador);
    contador++
}while(contador <= 3);

//--------------------------------------------------
console.log("Ciclo for");
for(let i = 0; i <= 3; i++){
    console.log(i);
}

//Numeros Par
console.log("NUmeros pares")
for(let numeroPar = 0; numeroPar <= 10; numeroPar++){
    if(numeroPar % 2 == 0){
        console.log("Numero par " + "="+ " " +  numeroPar);
    }
}

//------------------------------------------------
console.log("Estrucctura For - of")
let frutas = ["Manzanas", "Peras", "Platanos"]
for(fruta of frutas){
    console.log(fruta)
}

//---------------------------------------------------
console.log("For - in")
const listaCompras = {
    manzana: 5,
    peras: 2,
    platanos:1,
    Sandias: 5
}

for(frutas in listaCompras){
    console.log(frutas)
}

for(frutas in listaCompras){
    console.log(listaCompras[frutas])
}
console.log("Valor unico")
console.log(listaCompras.peras)
console.log(listaCompras["peras"])