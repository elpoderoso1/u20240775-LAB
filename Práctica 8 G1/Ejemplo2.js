const READLINE = require('readline');

const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
})

let letra = '', veces = 0, cadena = '';

function preguntarLetra() {
    RL.question('¿Qué letra desea, X o Z?', (inputletra) => {
        letra = inputletra.toUpperCase();
        if (letra === 'X' || letra === 'Z'){
            preguntarVeces();
        } else {
            console.log('Debes elegir entre la letra X y Z.');
            preguntarLetra();
        }
    });
}

function preguntarVeces() {
    RL.question('¿Cuántas repeticiones (1-15)?', (inputveces) => {
        veces = parseInt(inputveces);
        if (veces >= 1 && veces <= 15){
            generarCadena();
        } else {
            console.log('El número de repeticiones debe estar entre 1 y 15.');
            preguntarVeces();
        }
    });
}

function generarCadena() {
    while (veces > 0) {
        cadena += letra;
        veces--;
    }
    console.log('Resultado: ' + cadena);
    RL.close()
}

preguntarLetra()