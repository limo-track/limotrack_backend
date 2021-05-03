const router = require('express')();
const DeviceController = require('../controllers/devices.controller');

router.get('/', DeviceController.getDevices);
router.get('/types', DeviceController.getDeviceTypes);
router.post('/', DeviceController.createDevice);
router.put('/', DeviceController.updateDevice);
router.post('/remove', DeviceController.removeDevices);



module.exports = router