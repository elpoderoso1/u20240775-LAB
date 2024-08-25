const FECHA_ACTUAL = new Date();
const DIA = FECHA_ACTUAL.getDate();
const MES = FECHA_ACTUAL.getMonth() + 1; //Sumamos 1 para que el mes esté en el rango 1-12
const AÑO = FECHA_ACTUAL.getFullYear();

console.log(`Fecha actual: ${DIA}/${MES}/${AÑO}\n`);

//FORMATEO

const DIAS_NOMBRES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const NOMBRE_DIA = DIAS_NOMBRES[FECHA_ACTUAL.getDay()];

const MESES_NOMBRES = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
const NOMBRE_MES = MESES_NOMBRES[MES - 1];//Restamos 1 porque anteriormente le sumamos 1 para dar una equivalencia correcta del mes

console.log(`Fecha actual: ${DIA} ${NOMBRE_DIA}, ${NOMBRE_MES} del ${AÑO}`);