const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-Routes');
const dashboardRoutes = require('./dashboard-Routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
