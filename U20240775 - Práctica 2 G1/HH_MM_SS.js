const FECHA_ACTUAL = new Date();

const HORAS = FECHA_ACTUAL.getHours();
const MINUTOS = FECHA_ACTUAL.getMinutes();
const SEGUNDOS = FECHA_ACTUAL.getSeconds();
const MILISEGUNDOS = FECHA_ACTUAL.getMilliseconds();

console.log(`Hora actual ${HORAS}:${MINUTOS}:${SEGUNDOS}:${MILISEGUNDOS}`);