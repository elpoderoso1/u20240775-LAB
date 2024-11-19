const READLINE = require('readline');

let FilePath = 'vehiculos.json';

const INITIAL_VALUES = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', año: 2020 },
    { id: 2, marca: 'Honda', modelo: 'Civic', año: 2019 },
    { id: 3, marca: 'Ford', modelo: 'Focus', año: 2021 },
];

// Llamada a funciones
const CREATE = require('./1 - Crear.js');
const READ = require('./2 - Leer.js');
const ADD = require('./3 - Agregar.js');
const MODIFY = require('./4 - Modificar.js');
const DELETE = require('./5 - Eliminar.js');
const COUNT = require('./6 - Contar.js');

const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ShowMenu() {
    console.log('\n--- Menú ---');
    console.log('1 - Crear archivo.');
    console.log('2 - Leer archivo.');
    console.log('3 - Agregar auto.');
    console.log('4 - Modificar auto.');
    console.log('5 - Borrar auto.');
    console.log('6 - Contar autos.');
    console.log('7 - Cambiar nombre del archivo.');
    console.log('0 - Salir.');
}

function HandleMenuOptions(Select) {
    switch (parseInt(Select)) {
        case 1:
            CREATE(FilePath, INITIAL_VALUES);
            setTimeout(() => {
                MenuLoop();  // Llamada recursiva después de 1 segundo, esto para evitar que se amontonen los resultados
            }, 1000);
            break;
        case 2:
            READ(FilePath);
            setTimeout(() => {
                MenuLoop();  // Llamada recursiva después de 1 segundo, esto para evitar que se amontonen los resultados
            }, 1000);
            break;
        case 3:
            RL.question('Ingrese la marca del auto: ', (Brand) => { // Creación de estudiante de manera manual al seleccionar la opción 3 menos el ID el cual es automatica.
                RL.question('Ingrese el modelo del auto: ', (Model) => {
                    RL.question('Ingrese el año del auto: ', (Year) => {
                        ADD(FilePath, Brand, Model, Year);
                        setTimeout(() => {
                            MenuLoop();  // Llamada recursiva después de 1 segundo, esto para evitar que se amontonen los resultados
                        }, 1000);
                    });
                });
            });
            break;
        case 4:
            RL.question('Ingrese el ID del auto a modificar: ', (IDPro) => { // Este codigo esta tocho jaja
                const ID = parseInt(IDPro);
                RL.question('¿Qué desea modificar?\n1: Marca\n2: Modelo\n3: Año\n', (Option) => {
                    switch (parseInt(Option)) {
                        case 1:
                            RL.question('Ingrese la nueva marca: ', (NewBrand) => {
                                MODIFY(FilePath, ID, NewBrand); // Aquí solo modificamos el nombre
                                setTimeout(() => {
                                    MenuLoop();  // Llamada recursiva después de 1 segundo, esto para evitar que se amontonen los resultados
                                }, 1000);
                            });
                            break;
                        case 2:
                            RL.question('Ingrese el nuevo modelo: ', (NewModel) => {
                                MODIFY(FilePath, ID, undefined, NewModel); // Aquí no queremos modificar el nombre por lo que ponemos undefined el archivo Modificar.js se encargara de lo demas.
                                setTimeout(() => {                                 // Se le proporciona una edad, ya que es lo unico que cambiaremos.
                                    MenuLoop();  // Llamada recursiva después de 1 segundo, esto para evitar que se amontonen los resultados
                                }, 1000);                                               
                            });
                            break;
                        case 3:
                            RL.question('Ingrese el nuevo año: ', (NewYear) => {
                                MODIFY(FilePath, ID, undefined, undefined, parseInt(NewYear)); // Los mismo a lo anterior pero solo cambiaremos la carrera.
                                setTimeout(() => {
                                    MenuLoop();  // Llamada recursiva después de 1 segundo, esto para evitar que se amontonen los resultados
                                }, 1000);
                            });
                            break;
                        default:
                            console.log('Opción no válida.');
                            setTimeout(() => {
                                MenuLoop();  // Llamada recursiva después de 1 segundo, esto para evitar que se amontonen los resultados
                            }, 1000);
                            break;
                    }
                });
            });
            break;
        case 5:
            RL.question('Ingrese el ID del auto a eliminar: ', (IDPro) => {
                const ID = parseInt(IDPro);
                DELETE(FilePath, ID); // Solo necesitamos el archivo y el ID del estudiante a eliminar
                setTimeout(() => {
                    MenuLoop();  // Llamada recursiva después de 1 segundo, esto para evitar que se amontonen los resultados
                }, 1000);
            });
            break;
        case 6:
            COUNT(FilePath); // Aquí como solo es contar jaja
            setTimeout(() => {
                MenuLoop();  // Llamada recursiva después de 1 segundo, esto para evitar que se amontonen los resultados
            }, 1000);
            break;
        case 7:
            RL.question('Ingrese el nuevo nombre del archivo (con extensión .json): ', (newFileName) => { // Agregador mio por si se le quiere cambiar el nombre al archivo json
                if (newFileName.trim().length > 0 && newFileName.endsWith('.json')) {
                    FilePath = newFileName.trim();
                    console.log(`Nombre del archivo cambiado a: ${FilePath}`);
                } else {
                    console.log('Nombre inválido. Asegúrese de incluir la extensión .json.');
                }
                setTimeout(() => {
                    MenuLoop();  // Llamada recursiva después de 1 segundo, esto para evitar que se amontonen los resultados
                }, 1000);
            });
            break;
        case 0:
            let count = 0; // Prueba de animación
            const P = 'Saliendo';
            const AN = [`${P}.            `, `${P}..            `, `${P}...            `];
            const IN = setInterval(() => {
                process.stdout.write(`\r${AN[count % AN.length]} `);
                count++;
            }, 800)

            setTimeout(() => {
                clearInterval(IN);
                console.log('\nPrograma finalizado.');
                RL.close();
            }, 3000);
            break;
        default:
            console.log('Opción no válida. Inténtelo de nuevo.');
            break;
    }
}

function MenuLoop() {
    ShowMenu();
    RL.question('\nSeleccione una opción: ', (Select) => {
        HandleMenuOptions(Select);
        MenuLoop();
    });
}

// Iniciar el programa
MenuLoop();