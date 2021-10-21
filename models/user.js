const {  Model } = require('objection');
const knex = require('../utils/db')
const Role = require('./role');
const Account = require('./account');

Model.knex(knex);

class User extends Model{
    static get tableName(){
        return 'users';
    }

    static get relationMappings () {
        return{
            role: {
                relation: Model.BelongsToOneRelation,
                modelClass: Role,
                join: {
                    from: 'users.role_id',
                    to: 'roles.id'
                }
            },
            account: {
                relation: Model.BelongsToOneRelation,
                modelClass: Account,
                join: {
                    from: 'users.account_id',
                    to: 'accounts.id'
                }
            }
        }


    }

}

module.exports = User;