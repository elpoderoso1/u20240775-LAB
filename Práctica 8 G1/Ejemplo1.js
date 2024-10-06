const READLINE = require('readline');

const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mostrarMenu() {
    RL.question('1.- Escribir\n2.- Leer\n3.- Salir\nEscoge una opción: ', (opcion) => {
        opcion = parseInt(opcion)
        switch (opcion) {
            case 1:
                console.log('Opción 1: Eligis Escribir.');
                mostrarMenu();
                break;
            case 2:
                console.log('Opción 2: Eligis Leer.');
                mostrarMenu();
                break;
            case 3:
                console.log('Fin del programa.');
                RL.close();
                break;
            default:
                console.log('Debes elegir una de las opciones válidas.');
                mostrarMenu();
        }
    });
}

mostrarMenu()