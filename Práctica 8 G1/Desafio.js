const READLINE = require('readline');

const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

let intentos = 0;
let lives_p = 3;
const N = Math.floor(Math.random() * 100) + 1;

console.log('Welcome, en este minijuego deberas adivinar un número entre el 1 y el 100, tienes 3 vidas, cada intento te quitara 1 vida, suerte.');

function Adivina() {
    RL.question('Adivina el número entre el 1 y el 100.\n', (r) => {
        r = parseInt(r);
        intentos++;
        do {
            if (r === N) {
                console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
                RL.close();
                break;
            } else {
                lives_p--;
                if (r < N && lives_p > 0) {
                    console.log(`Pista - el número es mayor que ${r}.\nTe quedan ${lives_p} vidas.`);
                } else if (r > N && lives_p > 0) {
                    console.log(`Pista - el número es menor que ${r}.\nTe quedan ${lives_p} vidas.`);
                }

                if (lives_p > 0) {
                    Adivina();
                    break;
                } else {
                    console.log(`Que lástima, te quedaste sin vidas. El número era ${N}.`);
                    RL.close();
                    break;
                }
            }
        } while (r !== N && lives_p > 0);
    });
}

Adivina();
