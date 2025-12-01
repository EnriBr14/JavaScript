/*
Estados de la promesa
Pending
fullfiled
Reject

CallBacks
Resolve
reject

Cuando se resuelve una promesa
then()

Cuando no se resuelve
catch(): imprime el error de lo que no se resolvio

*/
const promesas = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        let operacion1 = true;
        if(operacion1){
            console.log("Promesa resuelta");
            resolve("Resuelta");
        }else{
            console.log("Error de ejecucion")
            reject("Erro");
        }
    },1500)
})

promesas
    .then(mensajes => {
        console.log(mensajes);
    })
    .catch(e => {
        console.log("Erro")
    })

/*
const promesa = new Promise((resolv, reject) => {
    setTimeout(() => {
        let operacion = true;
        if(operacion){
            resolv("Exito ")
            console.log("Se resolvio")

        }reject("Fallo")
    },1500)
})
*/
