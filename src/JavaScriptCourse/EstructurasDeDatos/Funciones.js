let buscado = "Mistico"

let luchadores = []
luchadores.push("Mistico")
luchadores.push("Cibernetico")
luchadores.push("Atlantis")
luchadores.push("Rey")
luchadores.push("Penta 0M")


for (let i =0; i < luchadores.length; i++){

    if (luchadores.includes(buscado)) {
        console.log("Luchador registrado");
    } else {
        console.log("Luchador no registrado");
    }


    console.log(luchadores[i])
}

console.log(luchadores.length)
console.log("Ho")