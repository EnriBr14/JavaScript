/*
function datosConFetch(){
    fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(e => console.log(e));
}

datosConFetch();
*/

//----------Uso de Async and Await -> Retornan una promesa -> Try y Catch ------------------
async function datafech(){
    try{
        //"Await" indica que se espera a que se resuelva esta promesa
        let respuesta = await fetch("https://rickandmortyapi.com/api/character")
        let datos = await respuesta.json()
        console.log(datos)
    }catch(err){
        console.log(err)
    }
}


//Multiples peticiones
const urls = ["https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
]

async function MiltiplePeticiones(){
    try{
        for await (let url of urls){
            let respuestas = await fetch(url)
            let datos = await respuestas.json()
            console.log(datos)
        }
    }catch(err){
        console.log(err)
    }
}
MiltiplePeticiones()