const FS = require('fs');

function AddCar(FilePath, Brand, Model, Year) {
    FS.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) throw err;

        let Cars = JSON.parse(data);
        
        // Generar un nuevo ID automáticamente, esto para evitar que se dupliquen
        const CARIDS = Cars.map(car => car.id);
        const NEWID = CARIDS.length > 0 ? Math.max(...CARIDS) + 1 : 1;

        // Crear el nuevo estudiante
        const NEWCAR = {
            id: NEWID,
            marca: Brand,
            modelo: Model,
            año: parseInt(Year)
        };

        // Agregar el nuevo estudiante
        Cars.push(NEWCAR);

        // Guardar los cambios en el archivo
        FS.writeFile(FilePath, JSON.stringify(Cars, null, 2), (err) => {
            if (err) throw err;
            console.log('\nNuevo auto agregado:', NEWCAR);
        });
    });
}

module.exports = AddCar;