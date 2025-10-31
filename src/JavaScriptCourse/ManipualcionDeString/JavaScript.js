
let palabra = "Perro come carne"
console.log(palabra.length)
//CAmbiar todas las letra a minuscula
console.log(palabra.toLowerCase())

//Cambiar todas las letra a mayuscula
console.log(palabra.toUpperCase())

//Extraer un caracter
console.log(palabra.charAt(1))

//Extraer una sub cadena
console.log(palabra.substring(1,4))
console.log(palabra.slice(1,4))

let nue = `Cadena ${palabra}`
console.log(nue)

/*
//Valores numericos}
let nuemero = 25
let numero2 = 234.234
console.log(typeof nuemero, typeof numero2)

//raiz cuadrada
let raiz = Math.sqrt(numero)
console.log(raiz)

let random = Math.random()*100
console.log(random)

//Tyoe casting
const strng = "42.4"
const integer = parseInt(strng)
const flot = parseFloat(strng)
console.log(integer)
console.log(flot)
*/
//Objeto
const persona = {
    name : "Jhon cena",
    edad : 45,
    luchas : [],

}

persona.luchas.push("WWE")
persona.luchas.push("CMLL")
persona.luchas.push("AAA")

console.log(persona)

