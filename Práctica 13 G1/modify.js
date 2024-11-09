const fs = require('fs')

const fileName = 'archivo.json'

fs.readFile(fileName, 'utf-8', (err, content) => {
    if (err) {
        console.log('Error al leer el JSON', err);
        return;
    } 
    try {
        const objectJSON = JSON.parse(content);
        objectJSON.ciclo = 'II-2024';
        objectJSON.edad = 19;
        delete objectJSON.activo;
        const newContent = JSON.stringify(objectJSON, null, 2)
        fs.writeFile(fileName, newContent, (err)=>{
            if (err) {
                console.log('Error al escribir en el archivo JSON', err);
            }
            console.log('Archivo JSON modificado y guardado exitosamente');
        })
    } catch(err){
        console.log('Error al pasear al JSON', err);
    }
})