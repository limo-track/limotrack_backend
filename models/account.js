const knex = require('../utils/db');
const {Model} = require('objection');

Model.knex(knex);

class Account extends Model{
    static get tableName(){
        return('accounts');
    }

    static get relationMappings(){

    }
}

module.exports = Account;