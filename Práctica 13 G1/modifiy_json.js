const fs = require('fs')

const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
        console.log('Error al leer el JSON', err);
        return;
    } 
    try {
        const libros = JSON.parse(data);
        libros[1].disponible = true
        fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err)=>{
            if (err) {
                console.log('Error al escribir en el archivo JSON', err);
            }
            console.log('Disponibilidad del libro actualizada correctamente');
        })
    } catch(err){
        console.log('Error al pasear al JSON', err);
    }
})