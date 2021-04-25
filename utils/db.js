const Knex = require('knex');

const knex = Knex({
    client: 'mysql2',
    connection: {
        host: process.env.db_host,
        user: process.env.db_user,
        password: process.env.db_password,
        database: process.env.database
    },
    debug: true,
    pool:{
        min: 2,
        max: 10
    }
});

module.exports = knex;