
//Contador
let opcion = false
function holamundo(){
    console.log("Hola mundo")
}

function adios(){
    console.log("Adios")
}

function menu(){
    while(!opcion){
        let selecion = 2


        if(selecion === 1 ){
            console.log("Tu seleciioneste 1, enero")
            holamundo()
            break;

        }else if(selecion === 2 ){
            console.log("Tu seleciioneste 2, febrero")
            adios()
            break;
        }else if(selecion === 3 ){
            console.log("Tu seleciioneste 3, marzo")
            break;
        }
        else if(selecion === 4 ){
            console.log("Saliendo del sistema")
            opcion = true
        }
        else{
            console.log("Mala eleccion")
            break;
        }

    }
}
 menu()

