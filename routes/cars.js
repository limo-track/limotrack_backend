const router = require('express')();
const CarsController = require('../controllers/cars.controller');

router.post('/', CarsController.createCar);
router.get('/:group_id', CarsController.getCars);
router.get('/by_id/:car_id', CarsController.getCarById);
router.post('/removeCars', CarsController.removeCars);
router.put('/', CarsController.updateCar);
module.exports = router;