const { Router } = require('express');
const apiRoutes = require('./api.routes');

const router = Router();

router.get('/', (_req, res) => res.json({ ok: true, msg: 'API root' }));
router.use('/', apiRoutes);

module.exports = router;
