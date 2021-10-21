const CarsServices = require('../services/cars.services');
const _ = require('lodash');

class CarsController{
    static async createCar(req, res){
        const car = _.pick(req.body, [
            'account_id',
            'group_id',
            'imei',
            'name',
            'plate_number',
            'vin_number',
            'engine_number',
            'fuel_rate',
            'color',
            'tank_size',
            'installed_by',
            'installation_time',
            'installation_company',
            'installation_location',
            'last_maintenance_time',
            'last_maintenance_odometer',
            'next_maintenance_time',
            'next_maintenance_odometer',
            'engine_on',
            'engine_off',
            'door_open',
            'door_closed',
            'speed_alert',
            'speed_limit',
            'path_id'
        ]);
        console.log(car)
        const {path} = req.body;

        const result = await CarsServices.createCar(car);
        console.log(result);
        res.send('OK')
    }

    static async getCars (req, res){
        const group_id = req.params.group_id;
        const result = await CarsServices.getCars(group_id);
        res.send(result);
    }

    static async removeCars(req, res){
        const {ids=[]} = req.body;
        await CarsServices.removeCars(ids);
        res.send('removed');
    }

    static async getCarById(req, res){
        const id = req.params.car_id;
        const result = await CarsServices.getCarById(id);
        res.send(result);
    }

    static async updateCar(req, res){
        const car = req.body;
        await CarsServices.updateCar(car);
        res.send('updated')
    }
}

module.exports = CarsController;