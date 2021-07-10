const {Model} = require('objection');
const knex = require('../utils/db');

Model.knex(knex);

class Driver extends Model{
    static get tableName(){
        return 'drivers';
    }
}

module.exports = Driver