const DOTASK = (iteraciones) => {
    return new Promise((resolve, reject) => {
        const NUMBERS = [];
        for (let i = 0; i < iteraciones; i++) {
            const NUMBER = 1 + Math.floor(Math.random() * 6)
            NUMBERS.push(NUMBER);
            if (NUMBER == 6) {
                reject({
                    error: true,
                    message: "Se ha sacado un 6"
                });
                return;
            }
        }
        resolve({
            error: false,
            value: NUMBERS
        });
    });
};

DOTASK(10)
    .then(result => console.log(`Tiradas correctas: ${result.value}.`))
    .catch(err => console.error(`Ha ocurrido algo: ${err.message}.`))