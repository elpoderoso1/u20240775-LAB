const READLINE = require('readline');
const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {
        console.log(`Procesando el pedido de ${pedido}...`);

        setTimeout(() => {
            let exito = Math.random() < 0.7;

            if (exito) {
                resolve(`El pedido de ${pedido} se ha realizado con éxito.`);
            } else {
                reject(`Error al procesar el pedido de ${pedido}.`);
            }
        }, 3000);
    });
}

RL.question('¿Qué desea pedir?\n', (pedido) => {
    procesarPedido(pedido)
        .then((msg) => {
            console.log(msg);
        })
        .catch((err) => {
            console.error(err);
        });
    RL.close()
})

