const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    nombre: 'Edgar Josías Cán Ajquejay',
    'Cancion Favorita': "Sweet Child O' Mine",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
