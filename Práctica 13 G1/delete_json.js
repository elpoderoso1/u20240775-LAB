const fs = require('fs')

const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf-8', (err, content) => {
    if (err) {
        console.log('Error al leer el JSON', err);
        return;
    } 
    try {
        const libros = JSON.parse(content);
        libros.splice(0, 1);

        fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err)=>{
            if (err) {
                console.log('Error al escribir en el archivo JSON', err);
            }
            console.log('Libro eliminado del archivo JSON exitosamente');
        })
    } catch(err){
        console.log('Error al pasear al JSON', err);
    }
})