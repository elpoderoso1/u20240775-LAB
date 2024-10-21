class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimirInfo(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const Persona1 = new Persona("Exterminator", 30);
Persona1.imprimirInfo();