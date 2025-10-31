const mapa = new Map();

// Agregar valores
mapa.set("nombre", "Carlos");
mapa.set("edad", 35);
mapa.set("activo", true);

// Acceder
console.log(mapa.get("nombre")); // "Carlos"

// Verificar si existe una clave
console.log(mapa.has("edad")); // true

// Recorrer todos los pares
mapa.forEach((valor, clave) => {
    console.log(clave + ": " + valor);
});