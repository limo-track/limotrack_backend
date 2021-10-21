const {Model} = require('objection');
const knex = require('../utils/db');

Model.knex(knex);

class Device extends Model{
    static get tableName(){
        return 'devices';
    }
}

module.exports = Device;