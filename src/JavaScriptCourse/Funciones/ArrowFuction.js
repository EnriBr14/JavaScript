let calificacion = [60,50,70,80,70,90,70,50,100,100,90,80,70,40,50,60,80,70,90.6,98.8,90.3,90.9]

//Filtrar calificaciones aprobatorias

const aprobados = calificacion.filter( cali => cali >= 60)
console.log(aprobados)

//Crear un nuevo arreglo de excelentes calificacion arriba de 90
const excelent = calificacion.filter(calif => calif >= 95)
console.log(excelent)

const por2 = calificacion.map(por2cali => por2cali*2)
console.log(por2)

const setMoode = new Set(calificacion)

console.log(setMoode)
