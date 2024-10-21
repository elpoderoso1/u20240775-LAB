class CuentaBancaria {
    constructor(titulo, saldo) {
        this.titulo = titulo;
        this.saldo = saldo;
    }
    static tipodeCuenta(){
        return 'Cuenta de Ahorros';
    }

    imprimirInfo(){
        console.log(`Titular: ${this.titulo}, Saldo: $${this.saldo}`);
    }
}

const Cuenta1 = new CuentaBancaria("Exterminator", 0);
Cuenta1.imprimirInfo();
console.log(CuentaBancaria.tipodeCuenta());
