const WAIT3SECONDS = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Tiempo de espera completo.");
    }, 3000);
});

WAIT3SECONDS
    .then((msg) => {
        console.log(msg)
    })
    .catch((err) => {
        console.error(err)
    });