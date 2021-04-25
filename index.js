require('dotenv').config();
const express = require('express');
const User = require('./models/user');
const Account = require('./models/account');

// User.query().insert({
//     user_name: 'tarek',
//     password: '123456',
//     email: "tarek@email.com",
//     role_id: 1,
//     account_id: 1
// }).then(console.log('added'))

async function getUser(){
    const user = await User.query()
        .select('users.id', 'users.user_name', 'email', 'password', 'roles.*')
        .innerJoin('roles', 'users.role_id', 'roles.id')
        .where('roles.id', 1)
    console.log(user[0]);
}

getUser()
const u = {name: 'tarek'}
const {name, password} = u;
console.log(name, password?password:'ss');
///////////////////////////////////

const app = express();

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is listing on port ' + port)
})