class Ciclista {
    constructor(distanciaRecorrida) {
        this._distanciaRecorrida = distanciaRecorrida;
    }
    get distanciaRecorrida(){
        if (this._distanciaRecorrida > 0) {
            console.log("El ciclista esta en movimiento.");
        } else if (this._distanciaRecorrida == 0) {
            console.log("El ciclista esta actualmente parado.");
        }
    }

    set distanciaRecorrida(new_distance){
        if (new_distance > -1) {
            this._distanciaRecorrida = new_distance;
            console.log(`Nuevo valor asignado a la distancia del recorrido = ${new_distance}`);
        } else {
            console.log("El valor de distancia recorrida debe ser mayor a -1.");
        }
    }
}

const Ciclista1 = new Ciclista(1);

Ciclista1.distanciaRecorrida = 0;
Ciclista1.distanciaRecorrida;
Ciclista1.distanciaRecorrida = 10;
Ciclista1.distanciaRecorrida = -1;
Ciclista1.distanciaRecorrida;
