const EX = require('express');
const PATH = require('path');

const APP = EX();
const PORT = 3000;

APP.use(EX.static('public'));

APP.get('/', (req, res) =>{
    res.sendFile(PATH.join(__dirname, 'views', 'index.html'));
});

APP.get('/about', (req, res) => {
    res.sendFile(PATH.join(__dirname, 'views', 'about.html'));
});

APP.use((req, res) => {
    res.status(404).sendFile(PATH.join(__dirname, 'views', '404.html'));
});

APP.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});