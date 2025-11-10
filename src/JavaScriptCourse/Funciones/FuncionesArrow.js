const greting = function (name){
    return `Hola ${name}!`;
}

const greting22 =  (name) => {
    return `Hola ${name}!`;
}

/*
Segunda forma
const greting2 = name => `Hola ${name}`
Cuando son dos variables se colocan parentesis
const greting2 = (Nombre, apellido) => `Hola ${nombre} ${apellido}`
}
*/

const newGretinImplcit = nome => `que hubo ${nome}`
console.log(newGretinImplcit("metal"))

const variousGreting = (ids, titu) => `Tu ids es ${ids} y  tu titu es ${titu}`
console.log(variousGreting(123,"chati"))

//------------------------------------------
const fictionalCaracter = {
    name:'uncle ben',
    messageWithtracional: function (mensaje){
        console.log(`${this.name} dice ${mensaje}`)
    },
    mensajeArrow: mensaje2 => console.log(`${this.name} hey ${mensaje2}`)

}
fictionalCaracter.messageWithtracional("fffff")
fictionalCaracter.mensajeArrow("feeoo")

const personaNM = {
    nombre: "John Wick",
    edadPeso: function (edad, peso){
        console.log(`Hola Jhona tu edad es ${edad} y tu peso ${peso}`)
    },
    edaPe: (edad,peso) => console.log(`Hola ${peso} e ${edad}`)

}

personaNM.edadPeso(15,"45 kg")
personaNM.edaPe(13,"4 kg")