const READLINE = require('readline');

const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
})

const CONTRACO = '1234';

function pedirContra() {
    RL.question('Introduce la contraseña.', (contra) => {
        if(contra != CONTRACO){
            console.log('Contraseña incorrecta. Inténtalo de nuevo.');
            pedirContra();
        } else {
            console.log('¡Bienvenido! Has introducido la contraseña correcta.');
            RL.close()
        }
    });
}

pedirContra();