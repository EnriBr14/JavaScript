const natalia = {
    nombre: "Natalia",
    age: "20",
    cursosAprobados:[
        "Curso Definitivo de HTML y CSS",
        "Curso practica de HTML y CSS"
    ],
    aprobarCurso(curso){
        this.cursosAprobados.push(curso)

    }
}

//Hacer aprovar otro curso
natalia.cursosAprobados.push("Curso de responsive desing")

function Estudiante(nombre, edad, cursosAprovados){
    this.nombre = nombre
    this.edad = edad
    this.cursosAprobados = cursosAprovados
    //Una forma de agregar metodos desde los atributos
    /*
    this.cursosAprobados = function (cursoNuevo){
        this.cursosAprobados.push(cursoNuevo)
    }

     */
}

Estudiante.prototype.aprobarCurso = function(curso){
    this.cursosAprobados.push(curso)
}

//------------------------Construcción de objetos-------------------------------
const juanaLaCubana = new Estudiante("Juana la cubana", 15, ["Videojuegos", "Creacion de personajes"])