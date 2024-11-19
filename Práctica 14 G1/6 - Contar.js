const FS = require('fs');

function CountCars(FilePath) {
    FS.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const CARS = JSON.parse(data);
        console.log(`\nNúmero total de autos: ${CARS.length}`);
    });
}

module.exports = CountCars;