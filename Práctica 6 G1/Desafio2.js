const READLINE = require('readline');
const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Ask() {
    RL.question('Ingrese un número del 1 al 12.\n(0 Para salir del programa)\n', (n) => {
        let nombreMes = "";
        n = parseInt(n);
        switch (n) {
            case 0:
                break;
            case 1:
                nombreMes = "Enero";
                break;
            case 2:
                nombreMes = "Febrero";
                break;
            case 3:
                nombreMes = "Marzo";
                break;
            case 4:
                nombreMes = "Abril";
                break;
            case 5:
                nombreMes = "Mayo";
                break;
            case 6:
                nombreMes = "Junio";
                break;
            case 7:
                nombreMes = "Julio";
                break;
            case 8:
                nombreMes = "Agosto";
                break;
            case 9:
                nombreMes = "Septiembre";
                break;
            case 10:
                nombreMes = "Octubre";
                break;
            case 11:
                nombreMes = "Noviembre";
                break;
            case 12:
                nombreMes = "Diciembre";
                break;
            default:
                nombreMes = "Mes inválido.";
                console.error(nombreMes);
                return Ask();
        }
        if (n != 0){
            console.log(`El mes es: ${nombreMes}`);
        }
        RL.close();
    });
}

Ask()