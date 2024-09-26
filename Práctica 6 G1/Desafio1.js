const READLINE = require('readline');
const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

RL.question('¿Qué edad tiene?\n', (edad) => {
    let sp = "";
    if(edad >= 60){
        sp = "Adulto Mayor";
    } else if (edad >= 36){
        sp = "Adulto";
    } else if (edad >= 18){
        sp = "Joven";
    } else if (edad >= 13){
        sp = "Adolescente";
    } else if (edad >= 0){
        sp = "Niño";
    } else {
        sp = "Este wn ni ha nacido.";
    }
    if(edad >= 0){
        console.log(`Usted es un@: ${sp}`);
    } else {
        console.error(`${sp}`);
    }
    RL.close();
})

