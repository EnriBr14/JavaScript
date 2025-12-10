
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

class Estudiante2{
    //Mandar un objeto como argumento en el constructor
    constructor({
                    nombree,
                    edad,
        email,
                    cursosOk = []
                }){
        this.nombree = nombree
        this.edad = edad
        this.email = email
        this.cursosOk = cursosOk
    }
    //metodos
    aprobarCuros(curso){
        this.cursosOk.push(curso)
    }
}

const mig = new Estudiante2({
    email: "mig@gmail.com",
    nombree: "Miguel",
    edad: 29,

})

//-------------------------Forma poco escalable de trabajar con objetos literales-------------------------------
/*
const juan = {
    namee : "Juan",
    username: "Juan1",
    points: 1000,
    redesSociales: {
        tiwter: "juantuiter@",
        instagrama: "rf4fr@",
        facebook: undefined
    },
    cursosApro:["Phyton", "Django"],
    rutas:[{
    nombreRuta: "Baackend",
        cursosDeRuta:[
          "Desarrollo con Node Js", "Express Js"
        ],
    },
        {
            nombreRuta: "frontend",
            cursosDeRuta:["Angular", "React"]
        }
    ]

}

const jorge = {
    namee : "Jorge",
    username: "jorge21",
    points: 1230,
    redesSociales: {
        tiwter: "jorguetuiter@",
        instagrama: "jorgeinsta@",
        facebook: undefined
    },
    cursosApro:["Java", "JDBC"],
    rutas:[{
        nombreRuta: "Baackend",
        cursosDeRuta:[
            "Java", "C++"
        ],
    },
        {
            nombreRuta: "frontend",
            cursosDeRuta:["SpringBoot", "HTML"]
        }
    ]

}
*/
class cursoo {
    constructor({nombreCurso, listaClases = []}) {
        this._nombreCurso = nombreCurso
        this.listaClases = listaClases
    }

    get nombreCurso(){
        return this._nombreCurso
    }

    set nombreCurso(nuevoNombre){
    if(nuevoNombre === "Curso malisioso"){
        console.error("NO se puede")
    }else
    {this._nombreCurso = nuevoNombre}
    }
}
const programacionBaisa = new cursoo({
nombreCurso: "Curso gratis de programacion basica"})

const cursoDefinitivoHTMl = new cursoo({
    nombreCurso: "Definitivo de HTML y CSS",
})

const cursoPracticoHTML = new cursoo({
    nombreCurso: "HTML y CSS practico",
})


class RutasApredizaje{
    constructor({nombreCurso, lista = []}) {
    this.nombreCurso = nombreCurso
        this.lista = lista
    }
}

const escuelaWeb = new RutasApredizaje({
    nombreCurso : "Escuela de desarrollo Web",
    lista : [programacionBaisa, cursoDefinitivoHTMl,cursoPracticoHTML],
})

const escuelaData = new RutasApredizaje({
    nombreCurso : "Escuela de DataScience",
    lista : [programacionBaisa,"Phyton", "Excel basico"],
})

const escuelaCiber = new RutasApredizaje({
    nombreCurso : "Escuela de ciberseguridad",
    lista : [programacionBaisa, "Linux", "Malware"],
})

//trabajar con clases
class Student{
    constructor({
        nombreS,
        email,
        userName,
        twuiter = undefined,//Parametro opcional
        instagram=undefined,
        facebook=undefined,
        listaDecursosAprobados=[],
        cursosEnAprrendizaje = []

                }){
            this.nombreS = nombreS
            this.email = email
            this.userName=userName
            this.socialMedia = {
                twuiter, // Esto es lo mismo que colocar twuiter = twuiter
                instagram,
                facebook,
            }
            this.listaDecursosAprobados=listaDecursosAprobados
            this.cursosEnAprrendizaje = cursosEnAprrendizaje
    }
}

const juan1 = {
    nombre: "Juan DC",
    email: "JuanCasablancas@gmail.com",
    userName: "Juan Matanza",
    twuiter: "juatiuwter@",
    cursosEnAprrendizaje: [escuelaData, escuelaCiber],
}

const sergio = {
    nombre: "Sergio AD",
    email: "sergio@gmail.com",
    userName: "Serch Takian",
    twuiter: "Sergiotakin@"
}