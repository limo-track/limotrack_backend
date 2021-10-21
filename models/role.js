const knex = require('../utils/db');
const {  Model } = require('objection');

Model.knex(knex);

class Role extends Model{
    static get tableName(){
        return('roles');
    }
}

module.exports = Role