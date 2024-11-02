class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    arrancar(){
        console.log(`${this.marca} ${this.modelo} está arrancando.`);
    }
    detener(){
        console.log(`${this.marca} ${this.modelo} se ha detenido.`);
    }
}

const Coche1 = new Coche("Toyota", "Corolla");
Coche1.arrancar();
Coche1.detener();