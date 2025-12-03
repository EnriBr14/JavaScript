//Promesas
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let valor = false;
        if(valor){
            resolve("La promesa se resolvioo bro");

        }else{

            reject("La promesa no se resolvio");

        }
    })
})

//Metodos sobre las promesas then y ctach
promesa.then(m => console.log(m))
    .catch(e => console.log(e));