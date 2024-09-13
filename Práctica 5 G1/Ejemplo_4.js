var diaDeSemana = "Lunes";

switch (diaDeSemana) {
    case "Lunes":
        console.log("Es el primer día de la semana.");
        break;
    case "Miércoles":
    case "Viernes":
        console.log("Es un día de trabajo.");
        break;
    default:
        console.log("Es un día de descanso.");
}