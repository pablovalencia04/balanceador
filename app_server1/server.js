const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor 1!');
});

app.listen(8000, () => {
  console.log('El servidor 1 está funcionando en el puerto 8000.');
});
