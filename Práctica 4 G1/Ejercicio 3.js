function SolicitarDatos() {
    return new Promise((resolve, reject) => {

        let Exito = Math.random() < 0.5; // Math.random() devuelve un valor entre 0 y 1 y se ajusta la probabilidad de 50/50

        setTimeout(() => {
            if (Exito) {
                resolve({
                    id: 1,
                    nombre: "HotDog",
                    edad: 23,
                });
            } else {
                reject("Error al obtener los datos de la DB.");
            }
        }, 2000);
    });
}

SolicitarDatos()
    .then((data) => {
        console.log(`Datos recibidos:\nID: ${data.id}\nNombre: ${data.nombre}\nEdad: ${data.edad}`);
    })
    .catch((err) => {
        console.error(err)
    })