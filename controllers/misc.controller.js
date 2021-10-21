const DeviceServices = require('../services/devices.services');
const UserServices = require('../services/user.service');
const AccountServices = require('../services/accounts.services');

class MiscController{

    static async getStatistics(req, res){
        const {users} = await UserServices.getUserCounts();
        const {accounts} = await AccountServices.getCounts();
        const {devices} = await DeviceServices.getCounts();
        const devicePerAccount = await AccountServices.getDevicesPerAccount();
        res.send({users, accounts, devices, devicePerAccount})
    }
}

module.exports = MiscController;