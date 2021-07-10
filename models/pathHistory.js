const {Model} = require('objection');
const knex = require('../utils/db');

Model.knex(knex);

class PathHistory extends Model{
    static get tableName(){
        return 'paths_history';
    }
}

module.exports = PathHistory