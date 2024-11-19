const FS = require('fs');

function ModifyCar(FilePath, id, NewBrand=undefined, NewModel=undefined, NewYear=undefined) {
    FS.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const CARS = JSON.parse(data);

        const CAR = CARS.find(p => p.id === id);

        if (CAR) {
            if (NewBrand !== undefined){
                CAR.marca = NewBrand;
            }
            if (NewModel !== undefined){
                CAR.modelo = NewModel;
            }
            if (NewYear !== undefined){
                CAR.año = NewYear;
            }
            FS.writeFile(FilePath, JSON.stringify(CARS, null, 2), (err) => {
                if (err) throw err;
                console.log('\nAuto modificado.');
            });
        } else {
            console.log('\nAuto no encontrado.');
        }
    });
}

module.exports = ModifyCar;
