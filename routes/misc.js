const router = require('express')();
const MiscController = require('../controllers/misc.controller');

router.get('/', MiscController.getStatistics);



module.exports = router;