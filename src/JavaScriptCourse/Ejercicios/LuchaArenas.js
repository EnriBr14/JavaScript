//Guardar luchadores en un array y validar que no existan
//Guardar arenas en un array
//Mostrar valores por empresa

let empresas = []
let luchadores = []
//--------------------------Funcion para programar------------------------------------------------------------------
//Verificar que el luchador o arena no esten registrados
function guardar(objeto){

    //Guarda arenas de lucha
    if(Object.keys(objeto).length === 3){
        //Verificar que no exista la arena
        for(let a = 0; a < empresas.length; a++){
            if (empresas[a].empresaName === objeto.empresaName){
                console.log("Usuario registrado...")
            }else{
                empresas.push(objeto)
            }
        }

    }else if(Object.keys(objeto).length > 3){
        luchadores.push(objeto)
    }
}

//-------------------------------------Luchadores--------------------------------------------------------------------
class Luchador{
    constructor(id, nombre, mascara, empresa, pais){
        this.id = id;
        this.nombre = nombre;
        this.mascara = mascara;
        this.empresa = empresa;
        this.pais = pais
    }

    caractaristicasLuchador(){
        console.log("Luchador: " + this.nombre + " \nEmpresa: " + this.empresa + " \nPais: " + this.pais);
    }
}

const l1 = new Luchador(1, "Rey Misterio", true, "WWE", "EU");
guardar(l1)
const l2 = new Luchador(2, "Pshyco Clown", true, "AAA", "Mexico");
guardar(l2)
const l3 = new Luchador(3, "Mesias", false, "AAA", "Mexico");
guardar(l3)
const l4 = new Luchador(4, "Jhon Cena", false, "WWE", "EU");
guardar(l4)
const l5 = new Luchador(5, "La Parka", true, "AAA", "Mexico");
guardar(l5)
const l6 = new Luchador(6, "Mistico", true, "CMLL", "Mexico");
guardar(l6)
const l7 = new Luchador(7, "Kemonito", true, "CMLL", "Mexico");
guardar(l7)
const l8 = new Luchador(8, "Randy Orton", false, "WEE", "EU");
guardar(l8)
const l9 = new Luchador(9, "Mil Mascaras", true, "AAA", "Mexico");
guardar(l9)
const l10 = new Luchador(10, "Mr Iguana", true, "AAA", "Mexico");
guardar(l10)
//-----------------------------------------Arenas--------------------------------------------------------------------
class Empresa{
    constructor(idEmpres, empresaName, paisE){
        this.idEmpres = idEmpres;
        this.empresaName = empresaName;
        this.paisE = paisE;
    }
    caracEmpresa(){
        console.log("Empresa: " + this.empresaName + " \nUbicacion: " + this.paisE);
    }
}

const e1 = new Empresa(1 ,"CMLL", "Mexico")
guardar(e1)
const e2 = new Empresa(2 ,"AAA", "Mexico")
guardar(e2)
const e3 = new Empresa(3 ,"WWE", "EU")
guardar(e3)
const e4 = new Empresa(4 ,"NXT", "EU")
guardar(e4)
/*
const e5 = new Empresa(5,"NXT", "EU")
guardar(e5)
*/
//------------------------------------------

empresas.forEach(empresa => {
    console.log(empresa.nombre)
})
console.log(empresas[1].empresaName)