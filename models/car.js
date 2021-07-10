const {Model} = require('objection');
const knex = require('../utils/db');

Model.knex(knex);

class Car extends Model{
    static get tableName(){
        return 'cars';
    }
}

module.exports = Car