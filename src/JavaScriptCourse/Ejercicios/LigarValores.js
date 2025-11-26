let arenasPorLuchador = []

let empresas = []

let e1 = {idEm: 1, empresa: "AAA", pais: "México",}
let e2 = {idEm: 2, empresa: "CMLL", pais: "Mexico",}
let e3 = {idEm: 3, empresa: "WWE", pais: "EU",}
let e4 = {idEm: 4, empresa: "NXT", pais: "EU",}

empresas.push(e1,e2,e3,e4)
//------------------------------------------------------------------------------------
//1
let luchadores = []
let l1 = {id : 1, nombre : "Mistico", idEmpresa: 2}
//2
let l2 = {id : 2, nombre : "Rey Misterio", numero: "1234", idEmpresa: 3}
//3
let l3 = {id : 3, nombre : "Psyco Clown", numero: "1234", idEmpresa: 1}
//4
let l4 = {id : 4, nombre : "La Parka", numero: "1234", idEmpresa: 4}
//5
let l5 = {id : 5, nombre : "John Cena", numero: "1234", idEmpresa: 3}
//6
let l6 = {id : 6, nombre : "Pagano", numero: "1234", idEmpresa: 1}
//7
let l7 = {id : 7, nombre : "The Undertaker", numero: "1234", idEmpresa: 3}
//8
let l8 = {id : 8, nombre : "Mr Iguana", numero: "1234", idEmpresa: 1}
//9
let l9 = {id : 9, nombre : "Kemonito", numero: "1234", idEmpresa: 2}
//10
let l10 = {id : 10, nombre : "Hijo de Dr Wagner Jr", numero: "1234", idEmpresa: 4}
 luchadores.push(l1,l2,l3,l4,l5,l6,l7,l8,l9,l10)

console.log("Objetos guardados")
//-------------------------Guardar arenas por luchador-----------------------
function mostrarLuchPAre(id){

    for(luchar of luchadores){
        if(luchar.idEmpresa === id){
            arenasPorLuchador.push(luchar)
        }

    }
    console.log("Solicitando datos...")
    setTimeout(()=> {

        for(let i = 0; i < arenasPorLuchador.length; i++){
                console.log("Luchador: "+ arenasPorLuchador[i].nombre +"\nEmpresa: " + arenasPorLuchador[i].idEmpresa)
        }
    },2000)


}

mostrarLuchPAre(2)



