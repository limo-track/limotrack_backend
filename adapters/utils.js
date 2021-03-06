const DeviceService = require("../services/device.service");
const TK303Adapter = require('./tk303.adapter');
const TK103Adapter = require('./tk103.adapter');

class DeviceUtils {
    static async checkDeviceType(data, server, port, ip) {
        // get device imei
        const imei = DeviceUtils.getDeviceImei(data);
        if (!imei) return null

        // check if device is registered and has a valid certificate
        const device = await DeviceUtils.validateDevice(imei);
        if (!device) return null;

        // get device type and redirect to right adapter

        switch (device.device_type_id) {
            case 1:
                return TK303Adapter.adapterController(data, server, port, ip, device.car_id);
            case 2:
                return TK103Adapter.adapterController(data, server, port, ip, device.car_id)

        }
    }

    static validateDevice(imei) {
        return DeviceService.doesDeviceExists(imei);
    }

    static getDeviceImei(data) {
        try {
            const rePattern = new RegExp(/^\d{15}(,\d{15})*$/);
            if (rePattern.test(data)) return data;

            const temp = data.split(":")[1];
            const dataFrame = temp.split(",");
            return dataFrame[0];
        } catch (e) {
            return null
        }

    }

}

module.exports = DeviceUtils;