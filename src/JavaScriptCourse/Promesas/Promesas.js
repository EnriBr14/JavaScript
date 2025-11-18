const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operacion = true;
        if(operacion){
            resolve("Exito ")
            console.log("Se resolvio")

        }reject("Fallo")
    },1500)
})

