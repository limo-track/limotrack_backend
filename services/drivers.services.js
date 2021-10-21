const Driver = require('../models/driver');

class DriversServices {

    // create driver
    static async createDriver(driver) {
        const newDriver = await Driver.query().insert(driver);

        return newDriver
    }

    // get group drivers
    static async getDrivers(group_id) {
        const drivers = await Driver.query()
            .select('drivers.id', 'drivers.name', 'drivers.phone', 'drivers.address', 'drivers.license', 'drivers.national_id')
            //'AVG(ratings.value) AS rating')
            .avg('ratings.value AS rating')
            .where('drivers.group_id', '=', group_id)
            .leftJoin('ratings', 'drivers.id', 'ratings.driver_id')
            .groupBy('drivers.id')
        return drivers;
    }

    // get driver by id
    static async getDriverById(driver_id) {

    }

    // update driver
    static async updateDriver(driver) {
        const { name, phone, address, license, national_id } = driver;
        await Driver.query()
            .update({ name, phone, address, license, national_id })
            .where('id', driver.id);
    }

    // delete drivers
    static removeDrivers(ids) {
        return Driver.query().delete().whereIn('id', ids);
    }

}

module.exports = DriversServices;