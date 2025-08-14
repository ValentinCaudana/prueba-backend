const { validationResult } = require('express-validator');

const saludo = (_req, res) => {
  res.json({ ok: true, mensaje: 'Hola API 👋' });
};

const echo = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next({ status: 400, message: errors.array() });
  res.json({ recibido: req.body });
};

module.exports = { saludo, echo };
