const router = require('express')();
const AccountsController = require('../controllers/accounts.controller');

router.get('/', AccountsController.getAllAccounts);
router.get('/:id', AccountsController.getAccountByID);
router.post('/', AccountsController.createAccount);
router.put('/', AccountsController.updateAccount);
router.post('/remove', AccountsController.removeAccounts);


module.exports = router;