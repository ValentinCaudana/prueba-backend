const express = require('express');
const { config } = require('./config/env');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());         // Body JSON
app.use('/api', router);         // Rutas
app.use(errorHandler);           // Errores centralizados

app.listen(config.port, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${config.port}`);
});

