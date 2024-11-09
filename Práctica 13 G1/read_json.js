const fs = require('fs')

const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf-8', (err, content) => {
    if (err) {
        console.log('Error al leer el JSON', err);
        return;
    } 
    try {
        const libros = JSON.parse(content);
        console.log('Los libros de la biblioteca: ', libros);
    } catch(err){
        console.log('Error al codificar el archivo JSON a JavaScript', err);
    }
})