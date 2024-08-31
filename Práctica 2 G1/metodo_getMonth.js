const FECHA_ACTUAL = new Date();
const MES = FECHA_ACTUAL.getMonth();
const MESES_NOMBRES = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
const NOMBRE_MES = MESES_NOMBRES[MES];

console.log(`El mes actual es ${NOMBRE_MES}.`);