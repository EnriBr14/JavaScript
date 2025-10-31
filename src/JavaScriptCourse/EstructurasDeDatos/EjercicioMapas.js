const luchaE = new Map();
const empresasLucha = new Map();
const empresasSoli = [];

class luchador{
    constructor(luchadorId, nombreLuchador, edad){
        this.luchadorId = luchadorId;
        this.nombreLuchador = nombreLuchador;
        this.edad = edad;
    }

    mostrar() {
        console.log(`
    ID: ${this.luchadorId}
    Nombre: ${this.nombreLuchador}
    Edad: ${this.edad}
    `);
    }
}

class empresas{
    constructor(idempresa, pais, empresa){
        this.idempresa = idempresa;
        this.pais = pais;
        this.empresa = empresa;
    }

    mostrarInfoempresas(){
        console.log(empresasSoli)
    }

}
//-----------------------------------------------------------------------------------------

function guardar(id,luchador){
    //Guardar luchador en el mapa
    luchaE.set(id, luchador);



}
//-----------------------------------------------------------------------------------------
let l1 = new luchador(1, "Mistico", 40);
guardar(l1.luchadorId, l1);
let l2 = new luchador(2, "Psyco Clown", 44);
guardar(l2.luchadorId, l2);
let l3 = new luchador(3, "Pagano", 43);
guardar(l3.luchadorId, l3);
let l4 = new luchador(4, "Penta OM", 42);
guardar(l4.luchadorId, l4);



let a1 = new empresas(1,"Mexico", "AAA");
let a2 = new empresas(2,"Mexico", "CMLL");
let a3 = new empresas(3,"Estados unidos", "WEE");







//-----------------------------------------------------------------------------------------


luchaE.forEach((valor, clave) => {
    console.log("Luchador" + valor);
    console.log("Datos")
    console.log(clave);

});


//-----------------------------------------------------------------------------------------
