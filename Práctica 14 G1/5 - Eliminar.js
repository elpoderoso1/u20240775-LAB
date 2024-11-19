const FS = require('fs');

function DeleteCar(FilePath, id) {
    FS.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        let Cars = JSON.parse(data);
        Cars = Cars.filter(p => p.id !== id);

        FS.writeFile(FilePath, JSON.stringify(Cars, null, 2), (err) => {
            if (err) throw err;
            console.log('\nAuto eliminado.');
        });
    });
}

module.exports = DeleteCar;