const Car = require('../models/car');
const PathHistory = require('../models/pathHistory');

class CarsServices {

    // create car
    static async createCar(car){
        let path = null;
        try{
            path = car.path_id
        }catch (e){}
        delete car.path_id;
        const newCar = await Car.query().insert(car);
        console.log('newCar', newCar)
        if(path)
            await PathHistory.query().insert({path_id: path, car_id: newCar.id})
    }

    // get group cars
    static async getCars(group_id){
        const cars = await Car.query()
            .select('cars.id', 'cars.name', 'cars.imei', 'cars.plate_number', 'devices.subscription', 'devices.phone',
                'paths_history.path_id', 'paths.name AS path')
            .where('cars.group_id', '=', group_id)
            .whereNull('paths_history.end_date')
            .leftJoin('devices', 'cars.imei', 'devices.imei')
            .leftJoin('paths_history', 'cars.id', 'paths_history.car_id')
            .leftJoin('paths', 'paths_history.path_id', 'paths.id')
        return cars
    }

    // get car by id
    static async getCarById(car_id){
        const car = await Car.query().findById(car_id);
        const pathHistory = await PathHistory.query()
            .where('car_id', '=', car_id)
            .whereNull('end_date');
        try{
            car.path_id = pathHistory[0].path_id;
        }catch(e){

        }
        return car
    }

    // update car
    static async updateCar(car){
        const path = car.path_id;
        delete car.path_id;
        const end_date = new Date();
        await Car.query().update(car).where('id', car.id);

        if(!path) return

        const pathHistory = await PathHistory.query()
            .where('car_id', '=', car.id)
            .whereNull('end_date');

        if(!pathHistory[0]){
            await PathHistory.query().insert({path_id: path, car_id: car.id});
            return
        }

        // path changed
        console.log(pathHistory[0].path_id === parseInt(path))
        if(path && pathHistory[0].path_id !== parseInt(path)){
            console.log(pathHistory[0])
            await PathHistory.query().findById(pathHistory[0].id).patch({end_date})
            await PathHistory.query().insert({path_id: path, car_id: car.id})
        }
        // end date the first path

    }

    // delete car
    static removeCars(ids){
        return Car.query().delete().whereIn('id', ids);
    }

}

module.exports = CarsServices;