let lista = [];

function guardar(nombre) {
    lista.push(nombre);
}

function listar() {
    console.log("Lista:");
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

function eliminar(nombre) {
    for (let u = 0; u < lista.length; u++) {
        if (lista[u] === nombre) {
            console.log("Registrado");
            lista.splice(u, 1); // elimina el elemento correcto
            break;
        }
    }
}

guardar("Enrique");
guardar("Sergio");
guardar("Hector");
guardar("Carlos");
guardar("Daniel");

eliminar("Carlos");
listar()