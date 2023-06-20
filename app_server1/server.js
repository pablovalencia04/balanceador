const express = require('express');
const app = express();
const path = require('path');

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/index.html'));
});

// Ruta para la página de saludo
app.get('/saludo', (req, res) => {
  res.send('¡Hola desde el servidor 1!');
});

app.listen(8000, () => {
  console.log('El servidor 1 está funcionando en el puerto 8000.');
});
