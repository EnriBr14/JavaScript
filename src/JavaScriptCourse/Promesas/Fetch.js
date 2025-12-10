function dataFetch(){
    fetch("https://rickandmortyapi.com/api/character")
        .then(respuesta => respuesta.json())
    .then(data => console.log(data))
        .catch(err => console.log(err))
}

dataFetch()



