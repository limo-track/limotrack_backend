const router = require('express')();
const PathController = require('../controllers/paths.controller');

router.get('/:group_id', PathController.getGroupPaths);
router.post('/', PathController.createPath);
router.put('/:id', PathController.updatePath);
router.post('/remove', PathController.removePaths);


module.exports = router