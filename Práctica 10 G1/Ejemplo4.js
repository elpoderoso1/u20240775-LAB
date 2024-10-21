class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hacerSonido(){
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal{
    hacerSonido(){
        console.log(`${this.nombre} ladra.`);
    }
}

const Perro1 = new Perro("Terreneitor");
Perro1.hacerSonido();