const EX = require('express');

const APP = EX();

const PORT = process.env.PORT || 3000;

APP.get('/', (req, res) =>{
    res.send('¡Hola Mundo! Este es mi servidor Express en 4K un link por Mega y Mediafire.');
})

APP.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})