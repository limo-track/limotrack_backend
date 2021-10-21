const Device = require("../models/device");

module.exports = class DeviceService {
    static async doesDeviceExists(imei) {
        // return true if device already registred and has a valid subscription and false if not
        const date = new Date();
        date.setFullYear(date.getFullYear() - 1);

        const device = await Device.query()
            .select('devices.id', 'devices.imei', 'devices.device_type_id', 'devices.subscription', 'cars.id as car_id')
            .where('devices.imei',  imei)
            .where('subscription', '>=', date)
            .innerJoin('cars', 'devices.imei', 'cars.imei')
            .limit(1);

        if(device.length === 0 ) return null
        return device[0];
    }
};