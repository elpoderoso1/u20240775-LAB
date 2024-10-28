class CuentaBancaria {
    constructor(saldo) {
        this._saldo = saldo
    }
    get saldo(){
        return this._saldo
    }
    set saldo(cantidad){
        if (cantidad > 0){
            this._saldo = cantidad;
        } else {
            console.log(`Saldo $${cantidad}, no se puede establecer un saldo negativo o 0.`);
            
        }
    }
}

const cuenta = new CuentaBancaria(10000000);
console.log(`Saldo inicial: $${cuenta.saldo}`);
cuenta.saldo = 20000000;
console.log(`Movimiento: $${cuenta.saldo}`);
cuenta.saldo = -10000000;
console.log(`Saldo actual: $${cuenta.saldo}`);
