const FS = require('fs');

function ReadCars(FilePath) {
    FS.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const AS = JSON.parse(data);
        console.log('\nLista de Autos:', AS);
    });
}

module.exports = ReadCars;