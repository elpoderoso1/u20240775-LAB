// const FECHA_ACTUAL = new Date();
const FECHA_OBJECT = new Date('1000-02-12');

const DIA = FECHA_OBJECT.getDate();
const MES = FECHA_OBJECT.getMonth() + 1; //Sumamos 1 para que el mes esté en el rango 1-12
const YEAR = FECHA_OBJECT.getFullYear();

// console.log(`Fecha actual: ${DIA}/${MES}/${YEAR}.\n`);

//FORMATEO

const DIAS_NOMBRES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const NOMBRE_DIA = DIAS_NOMBRES[FECHA_OBJECT.getDay()];

const MESES_NOMBRES = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
const NOMBRE_MES = MESES_NOMBRES[MES - 1];//Restamos 1 porque anteriormente le sumamos 1 para dar una equivalencia correcta del mes

console.log(`Naciste un ${NOMBRE_DIA}, ${DIA} de ${NOMBRE_MES} del ${YEAR}.`);

//Parecido a './Exercise.js'