const router = require('express')();
const GroupsController = require('../controllers/groups.controller');

router.get('/:account_id', GroupsController.getGroupsByAccount);
router.post('/', GroupsController.createGroup);
router.put('/', GroupsController.updateGroup);
router.post('/remove', GroupsController.removeGroups);


module.exports = router;