const READLINE = require('readline');

const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarLetraEnCadena() {
    RL.question('Introduce una cadena de texto: ', (CADENA) => {
        RL.question('Introduce la letra que deseas contar: ', (LETRA) => {
            let contador = 0;
            let i = 0;
            
            while (i < CADENA.length) {
                if (CADENA[i] === LETRA) {
                    contador++;
                }
                i++;
            }
            
            console.log(`La letra "${LETRA}" aparece ${contador} veces en la cadena "${CADENA}".`);
            
            RL.close();
        });
    });
}

contarLetraEnCadena();

// No salia bien en la guia asi que hice este otro.