const { Model } = require('objection');
const knex = require('../utils/db');

Model.knex(knex);

class Group extends Model{
    static get tableName(){
        return 'groups';
    }
}

module.exports = Group;