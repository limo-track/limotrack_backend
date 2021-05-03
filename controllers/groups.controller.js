const GroupsServices = require('../services/groups.services');

class GroupsController {

    static async getGroupsByAccount(req, res) {
        const account_id = req.params.account_id;
        const result = await GroupsServices.getGroupsByAccount(account_id);
        res.send(result);
    }

    static async createGroup(req, res) {
        console.log(req.body)
        const {account_id, name, address, latitude = null, longitude = null, contact_person, contact_phone} = req.body;
        const account = await GroupsServices.createGroup(account_id, name, address, latitude, longitude, contact_person, contact_phone);
        res.send(account);
    }

    static async updateGroup(req, res) {
        const {id, name, address, latitude = null, longitude = null, contact_person, contact_phone} = req.body;
        const result = await GroupsServices.updateGroup(id, name, address, latitude, longitude, contact_person, contact_phone);
        res.send(result)
    }

    static async removeGroups(req, res) {
        const {ids=[]} = req.body;
        console.log(req.body)
        const result = await GroupsServices.removeGroups(ids);
        res.send('Deleted')
    }


}

module.exports = GroupsController;