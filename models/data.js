const {Model} = require('objection');
const knex = require('../utils/db');

Model.knex(knex);

class Data extends Model{
    static get tableName(){
        return 'data_log';
    }
}

module.exports = Data