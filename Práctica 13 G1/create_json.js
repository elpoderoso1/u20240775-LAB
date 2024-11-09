const fs = require('fs')

const fileName = 'biblioteca.json'
const libros = [
    { titulo: 'Cien Años de Soledad', autor: 'Gabriel Garcia Marquez', disponible: true},
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', disponible: false},
    { titulo: 'Orgullo y Prejuicio', autor: 'Jane Austen', disponible: true},
]

fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err) => {
    if (err) {
        console.log('Error al crear el JSON', err);
    } else {
        console.log('Archivo creado exitosamente con 3 libros iniciales.');
    }
})