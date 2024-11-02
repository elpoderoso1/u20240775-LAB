class Coche {
    constructor(marca, modelo, velocidad) {
        this._marca = marca;
        this._modelo = modelo;
        this._velocidad = velocidad;
    }
    acelerar(aceleracion){
        if (aceleracion > 0 && this._velocidad + aceleracion >= 0){
            this._velocidad += aceleracion;
            console.log(`El coche ha acelerado. Nueva velocidad: ${this._velocidad} km/h.`);
        } else if (this._velocidad + aceleracion < 0){
            console.log("La aceleracion de velocidad es demasiado baja, el coche se detendría.");
        } else {
            console.log("La aceleracion de velocidad debe ser mayor a 0.");
        }
    }
    frenar(decremento){
        if (decremento > 0 && this._velocidad - decremento >= 0){
            this._velocidad -= decremento;
            console.log(`El coche ha frenado. Nueva velocidad: ${this._velocidad} km/h.`);
        } else if (this._velocidad - decremento < 0){
            console.log("El decremento de velocidad es demasiado alto, el coche se detendría.");
        } else {
            console.log("El decremento de velocidad debe ser mayor a 0.");
        }
    }
    mostrarInfo(){
        console.log(`El coche: ${this._marca} ${this._modelo}, Velocidad actual: ${this._velocidad} km/h.`);
        
    }
}

const Coche1 = new Coche("Toyota", "Corolla", 0);
Coche1.mostrarInfo();
Coche1.acelerar(20);
Coche1.frenar(10);
Coche1.frenar(15);
Coche1.mostrarInfo();