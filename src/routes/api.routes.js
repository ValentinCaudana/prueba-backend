const { Router } = require('express');
const { body } = require('express-validator');
const { saludo, echo } = require('../controllers/api.controller');

const router = Router();

router.get('/saludo', saludo);

router.post('/echo',
  body('hola').isString().withMessage('hola debe ser string'),
  echo
);

module.exports = router;
