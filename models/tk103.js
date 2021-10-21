const {Model} = require('objection');
const knex = require('../utils/db');

Model.knex(knex);

class TK103 extends Model{
    static get tableName(){
        return 'tk103';
    }
}

module.exports = TK103;