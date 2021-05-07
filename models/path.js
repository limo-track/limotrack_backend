const { Model} = require('objection');
const knex = require('../utils/db');

Model.knex(knex);

class Path extends Model {
    static get tableName(){
        return 'paths'
    }
}

module.exports = Path