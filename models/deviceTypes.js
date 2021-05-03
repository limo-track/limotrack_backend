const {Model} = require('objection');
const knex = require('../utils/db');

Model.knex(knex);

class DeviceTypes extends Model{
    static get tableName(){
        return 'device_types';
    }
}

module.exports = DeviceTypes