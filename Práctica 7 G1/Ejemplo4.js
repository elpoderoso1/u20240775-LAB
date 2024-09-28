//Recorrer un array de nombres con diferentes operaciones
const nombres = ["Ana","Luis","Maria","Juan","Carlos","Elena","Sofia","Pedro"];

console.log("Lista de Nombres: ");
for(let i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}

//Contar cantidad total de nombres
let cantidadNombres = nombres.length;
console.log("\nCantidad total de nombres: "+ cantidadNombres);

//Buscar un nombre especifico dentro del array
let nombreBuscado = "Maria";
let encontrado = false;
for(let i=0; i<nombres.length; i++){
    if (nombres[i] === nombreBuscado){
        encontrado = true;
        console.log("\nNombre '" + nombreBuscado + "' fue encontrado en el array.");
        break;
    }
}
if(!encontrado){
    console.log("\nEl nombre '" + nombreBuscado + "' no fue encontrado en el array.");
}

//Encontrar el nombre m largo en el array
let nombreMasLargo = [0];
for(let i=0; i<nombres.length; i++){
    if(nombres[i].length > nombres[i]);
    nombreMasLargo = nombres[i];
}