const express = require('express');
const app = express();
const port = 3000;

// Habilita JSON en requests
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('¡Hola desde mi primera API con Express! 🚀');
});

// Ruta que devuelve JSON
app.get('/api/saludo', (req, res) => {
  res.json({ ok: true, mensaje: 'Hola API 👋' });
});

// Ruta POST (eco del body)
app.post('/api/echo', (req, res) => {
  res.json({ recibido: req.body });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

