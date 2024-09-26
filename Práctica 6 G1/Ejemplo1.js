let puntaje = 85;
let calificacion = "";

if (puntaje >= 90) {
    calificacion = "A";
} else if (puntaje >= 80) {
    calificacion = "B";
} else if (puntaje >= 70) {
    calificacion = "C";
} else if (puntaje >= 60) {
    calificacion = "D";
} else if (puntaje >= 50) {
    calificacion = "E";
} else {
    calificacion = "F";
}
console.log(`La calificación del estudiante es: ${calificacion}.`);
