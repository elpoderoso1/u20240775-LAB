let edad = 30;
let membresia = "VIP";

if (edad < 18) {
    console.log("Eres menor de edad, puedes acceder a la membresía juvenil.");
} else if (edad >= 18 && edad <= 60) {
    console.log("Eres un adulto, puedes acceder a todas las membresías.");
} else {
    console.log("Eres mayor de 60 años, tienes descuentos en las membresías.");
}

switch (membresia) {
    case "Básico":
        console.log("Membresía Básico: Acceso a las áreas de entrenamiento estandar.");
        break;
    case "Estándar":
        console.log("Membresía Estándar: Acceso a todas las áreas de entrenamiento y clases grupales.");
        break;
    case "VIP":
        console.log("Membresía VIP: Acceso completo, con beneficios adicionales como el spa y entrenadores personalizados."); 
        break;
    default:
        console.log("Tipo membresía no válida.");
}
