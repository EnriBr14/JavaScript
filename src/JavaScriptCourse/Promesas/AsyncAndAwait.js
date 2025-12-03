//Uso de fetch
function fetchBasico(){
    fetch("https://rickandmortyapi.com/api/character")
        .then(respuestas => respuestas.json())
        .then(datosServidor => console.log(datosServidor))
        .catch(e => {console.log(e)})
}

/*

//Una función "async" retorna una promesa
async function usoDeFetch(){
   try{
       let respuesta = await fetch("https://rickandmortyapi.com/api/character")
       //.json retorn los datos en JSON
       let datosObtenidosConFetch = await respuesta.json()
       console.log(datosObtenidosConFetch)
   }catch(err){
       console.log(err)
   }
}

*/

async function usoDeFetch(){
    console.log("UsoDeFetchhhh");
        let respuesta = await fetch("https://rickandmortyapi.com/api/character")
        let datos = await respuesta.json()
    console.log(datos);
}

usoDeFetch()