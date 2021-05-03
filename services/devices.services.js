const Device = require('../models/device');
const DeviceTyps = require('../models/deviceTypes');

class DevicesServices{

    static async createDevice(imei, device_type_id, subscription, phone){
        let d = await Device.query()
            .where('imei', imei);
        if(d.length>0) {
            return null
        }
         d = await Device.query().insert({imei, device_type_id, subscription, phone});
        return d
    }

    static async getDevices(){
        return Device.query()
            .select('devices.*','device_types.type AS type')
            .innerJoin('device_types', 'devices.device_type_id', 'device_types.id');
    }

    static async updateDevice(imei, phone, subscription){
        await Device.query()
            .update({phone, subscription})
            .where('imei', imei);
    }

    static removeDevices(ids){
        return Device.query().delete().whereIn('id', ids);
    }

    static async getCounts(){
        const count = await Device.query().count('id AS devices');
        return count[0]
    }

    static getDeviceTypes(){
        return DeviceTyps.query();
    }
}

module.exports = DevicesServices;