const DriverServices = require('../services/drivers.services');

class DriversController {
    static async getDrivers(req, res) {
        const group_id = req.params.group_id;
        const results = await DriverServices.getDrivers(group_id);
        res.send(results)
    }

    static async removeDrivers(req, res) {
        const { ids = [] } = req.body;
        await DriverServices.removeDrivers(ids);
        res.send('removed');
    }

    static async createDriver(req, res) {
        const { driver } = req.body;
        await DriverServices.createDriver(driver);
        res.send('OK')
    }

    static async updateDriver(req, res) {
        const { driver } = req.body;
        console.log(req.body, driver)
        await DriverServices.updateDriver(driver);
        res.send('OK');
    }
}

module.exports = DriversController;