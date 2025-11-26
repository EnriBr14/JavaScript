let luchadores = []
luchadores.push("Mistico")
luchadores.push("Octagon jr")
luchadores.push("Mr Iguana")
luchadores.push("La Parka")
luchadores.push("Blue Demon")
luchadores.push("El Santo")
luchadores.push("Mil Mascaras")
luchadores.push("Penta 0M")
luchadores.push("Cibernetico")
luchadores.push("La Parka")
luchadores.push("Blue Demon")
luchadores.push("El Santo")
luchadores.push("Mil Mascaras")
luchadores.push("Penta 0M")

let poderes = [1,2,3,4,1,4,4,6,2,44,5,6,1,6,65,4,7,8,2,7,5,3]

console.log("Metodos en arrays")
console.log(luchadores.join("\n"))

//Acceder a un elemento por id---------------------------------------------
console.log("Acceder a un elemento por ID")
console.log(luchadores[0])

//--------------------------------------------------------------------------
console.log("Eliminar ultimo elemento del array")
console.log(luchadores.pop())
//--------------------------------------------------------------------------
console.log("Eliminar primer elemento del array")
console.log(luchadores.shift())

//--------------------------------------------------------------------------
console.log("Nuevo array")
console.log(luchadores)
//Filter--------------------------------------------------------------------
console.log("Metodo filter")
let menores5 = poderes.filter(num => num <=  5)
console.log(menores5)
//----------------Ordenar-----------------------------------------------------
console.log("Ordenar el array")
menores5.sort()
console.log(menores5)

//Splice--------------------------------------------------------------------
console.log("Luchador 2: " + luchadores[0])
let eliminar = luchadores.splice(0,1)
for(luch of luchadores){
    console.log(luch)
}
