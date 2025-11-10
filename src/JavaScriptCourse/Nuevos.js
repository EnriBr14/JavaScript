const funcion = require("./s")

console.log("Hi")
function saludar() {
    setTimeout(function() {
        console.log("Hola");
    }, 3000);
}

function saludar() {

    setTimeout(() =>
        console.log("Hola"), 100000);

}
saludar();

console.log(funcion.sumarDosNumeros(5,3))