class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre
        this._apellido = apellido
    }
    get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;
    }
    set nombreCompleto(nombreCompleto) {
        [this._nombre, this._apellido] = nombreCompleto.split(" ");
    }
}

const persona = new Persona("Bax", "Best");
persona.nombreCompleto = "Fes bak"
console.log(persona.nombreCompleto);
