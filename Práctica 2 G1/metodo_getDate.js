const FECHA_ACTUAL = new Date();
const DIA = FECHA_ACTUAL.getDay();
const MES = FECHA_ACTUAL.getMonth();
const YEAR = FECHA_ACTUAL.getFullYear();

console.log(`Hoy es ${DIA}/${MES}/${YEAR}.`);