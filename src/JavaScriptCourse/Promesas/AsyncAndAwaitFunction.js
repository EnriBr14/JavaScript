//Uso de "Async y Await"
async function DataFetch(){
    try{
        const respuesta = await fetch("https://rickandmortyapi.com/api/character")
        const data = await respuesta.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }




}

DataFetch()