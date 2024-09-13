let categoria_cliente = "VIP";
let des = 0
let precio = 100
console.log(`Precio del objeto normal $${precio}.`);

switch (categoria_cliente) {
    case "Básico":
        des = 0.2
        console.log("Categoria de cliente - Básico: descuento del 20%.");
        break;
    case "Estándar":
        des = 0.4
        console.log("Categoria de cliente - Estándar: descuento del 40%.");
        break;
    case "VIP":
        des = 0.6
        console.log("Categoria de cliente - VIP: descuento del 60%."); 
        break;
    default:
        console.log("Categoria de cliente no válida.");
}

console.log(`Precio del objeto con descuento $${precio-(precio*des)}.`);
