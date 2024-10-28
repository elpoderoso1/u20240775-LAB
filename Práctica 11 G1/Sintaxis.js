let objeto = {
    get propiedad(){
        return "Valor de la propiedad";
    },
    set propiedad(valor){
        console.log(`Asignado el valor: ${valor}`);
    },
};

console.log(objeto.propiedad);
objeto.propiedad = "Nuevo valor";