const {Model} = require('objection');
const knex = require('../utils/db');

Model.knex(knex);

class TK303 extends Model{
    static get tableName(){
        return 'tk303';
    }
}

module.exports = TK303;