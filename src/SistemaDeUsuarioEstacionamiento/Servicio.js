let usuarios = new Map()


function registrar(id,usuar){
    usuarios.set(id,usuar);
}


function mostrar() {
    return Array.from(usuarios.values());
}


module.exports = {
    registrar, mostrar
}