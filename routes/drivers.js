const router = require('express')();
const DriverController = require('../controllers/drivers.controller');

router.get('/:group_id', DriverController.getDrivers);
router.post('/', DriverController.removeDrivers);
router.post('/create', DriverController.createDriver);
router.put('/', DriverController.updateDriver);

module.exports = router;