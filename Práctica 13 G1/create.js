const fs = require('fs')

const fileName = 'archivo.json'
const content = {
    nombre: 'Xian Xen Xon',
    edad: 22,
    materias: ['Logica De Programacion', 'Matematica 69'],
    activo: true
}

fs.writeFile(fileName, JSON.stringify(content, null, 2), (err) => {
    if (err) {
        console.log('Error al crear el JSON', err);
    } else {
        console.log('Archivo creado exitosamente');
    }
})