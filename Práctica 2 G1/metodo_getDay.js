const FECHA_ACTUAL = new Date();
const DIA_SEMANA = FECHA_ACTUAL.getDay();
const DIAS_NOMBRES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const NOMBRE_DIA = DIAS_NOMBRES[DIA_SEMANA];

console.log(`Hoy es ${NOMBRE_DIA}.`);