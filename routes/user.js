const router = require('express')();
const UserController = require('../controllers/user.controller');

router.get('/:id', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.put('/', UserController.updateUser);
router.post('/remove', UserController.removeUsers);
router.post('/login', UserController.login);
router.patch('/user', UserController.changePassword);

router.post('/changePassword', UserController.changePassword);


module.exports = router;