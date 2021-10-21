const DevicesServices = require('../services/devices.services');

class DevicesController{

    static async createDevice(req, res){
        const {imei, device_type_id, subscription, phone} = req.body;
        const device = await DevicesServices.createDevice(imei, device_type_id, subscription, phone);
        if(!device) return res.status(400).send('Bad request');
        res.send(device);
    }

    static async getDevices(req, res){
        const devices = await DevicesServices.getDevices();
        res.send(devices);
    }

    static async getGroupFreeDevices(req, res){
        const group_id = req.params.group_id;
        const devices = await DevicesServices.getGroupFreeDevices(group_id);
        res.send(devices);
    }

    static async updateDevice(req, res){
        const {imei, phone, subscription} = req.body;
        await DevicesServices.updateDevice(imei, phone, subscription);
        res.send('updated');
    }

    static async removeDevices(req, res){
        const {ids= []} = req.body;
        await DevicesServices.removeDevices(ids);
        res.send('deleted')
    }

    static async getDeviceTypes(req, res){
        const types = await DevicesServices.getDeviceTypes();
        res.send(types);
    }
}

module.exports = DevicesController;