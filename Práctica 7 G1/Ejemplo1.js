//Seleccionar todos los encabezados desde h1-h6
const headers = document.querySelectorAll('h1,h2,h3,h4,h5,h6');

//Usaremos el bucle for para iterar los encabezados
for(let i = 0; i < headers.length; i++){
    //Cambiar el texto de cada encabezado
    headers[i].innerText = `Nuevo encabezado de nivel ${i+1}`;
}