let users = []
let password = []
//---------------------------------------------------
users.push("Enrique")
password.push("12")

users.push("Martin")
password.push("34")

users.push("Sergio")
password.push("56")


users.push("Jardin")
password.push("33")


users.push("Pedro")
password.push("22")


users.push("Mario")
password.push("11")
//---------------------------------------------------
let usuario = "Sergio"
let buscado = "Pedro"
// verificar si usuario esta registrado
console.log("Eliminar")
for(let i = 0; i < password.length; i++){
    if(users[i] == usuario){
        users.splice(i,1)
        password.splice(i,1)
        console.log(users)
        console.log(password)
    }

    for(let u = 0; u < password.length; u++){
        if(users[i].includes(buscado)){
            console.log("Si esta registrado" + " " + users[i])
            break;
        }
    }

}

const letras = ["d","x","a", "b", "c","d","x","a", "b", "c",]
letras.sort()
console.log(letras)

const sett = new Set(letras)
console.log(sett)