const AccountServices = require('../services/accounts.services');

class AccountsController {

    static async getAllAccounts(req, res) {
        const result = await AccountServices.getAllAccounts();
        res.send(result);
    }

    static async createAccount(req, res) {
        const {name, address, latitude = null, longitude = null, contact_person, contact_phone} = req.body;
        const account = await AccountServices.createAccount(name, address, latitude, longitude, contact_person, contact_phone);
        res.send(account);
    }

    static async updateAccount(req, res) {
        const {id, name, address, latitude = null, longitude = null, contact_person, contact_phone} = req.body;
        const result = await AccountServices.updateAccount(id, name, address, latitude, longitude, contact_person, contact_phone);
        res.send(result)
    }

    static async removeAccounts(req, res) {
        const {ids=[]} = req.body;
        const result = await AccountServices.removeAccounts(ids);
        res.send('Deleted')
    }

}

module.exports = AccountsController;