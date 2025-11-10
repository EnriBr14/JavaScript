
class Users {
    #id;
    #nombre;
    #correo;

    constructor(id, nombre, correo) {
        this.#id = id;
        this.#nombre = nombre;
        this.#correo = correo;
    }
    get id(){return this.#id;}
    set id(value){this.#id = value;}

    get nombre() {return this.#nombre;}
    set nombre(value) {this.#nombre = value;}

    get correo() {return this.#correo;}
    set correo(value) {this.#correo = value;}


    toJSON() {
        return {
            id: this.#id,
            nombre: this.#nombre,
            correo: this.#correo
        };
    }
}

module.exports =
    Users
;