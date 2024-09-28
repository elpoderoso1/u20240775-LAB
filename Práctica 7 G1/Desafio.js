const READLINE = require('readline');

const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

const VOCALS = ["A", "E", "I", "O", "U"];

function Contar_Vocal_Num(){
    RL.question('Introduzca un texto.\n',(msg)=>{
        msg = msg.trim();
        while(msg === ""){
            console.error("Debe introducir un texto valído, no un texto vacío.");
            return Contar_Vocal_Num();
        }
        let VCont = 0;
        let NCont = 0;
        for (let element = 0; element < msg.length; element++) {
            let char = msg[element];
            if (VOCALS.includes(char.toUpperCase())) {
                VCont++;
            }
            // isNaN verifica es convertible a numero o no, si es convertible devuelve false, si no es convertible devuelve true, es decir,
            // si es una cadena de texto devolvera true y si es un numero, ya sea en cadena de texto pero contiene solamente numeros devuelve false.
            // Luego la cancelacion de que char no debe ser un espacio en blanco es debido a que isNaN identifica el espacio en blanco como un 0.
            if (!isNaN(char) && char !== " ") { 
                NCont++;
            }
        };
        console.log(`La cantidad de vocales es: ${VCont}.`);
        console.log(`La cantidad de números es: ${NCont}.`);
        RL.close();
    });
}
Contar_Vocal_Num()