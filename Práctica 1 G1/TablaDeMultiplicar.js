function tablaDelX(x, hasta) {
    for (let i = 0; i <= hasta; i++){
        console.log(`${x} x ${i} = ${x*i}`);
    }
}

let tabla_de = 5;
let finalizar_hasta = 10;
tablaDelX(tabla_de, finalizar_hasta)