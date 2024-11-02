class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    arrancar(){
        console.log(`${this.marca} ${modelo} está arrancando.`);
    }
    frenar(){
        console.log(`${this.marca} ${modelo} se ha detenido.`);
    }
}

const Coche1 = new Coche("Toyota", "Corolla");
Coche1.arrancar();
Coche1.frenar();