require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user');
const accountRouter = require('./routes/accounts');
const groupRouter = require('./routes/groups');
const deviceRouter = require('./routes/devices');
const miscRouter = require('./routes/misc');

const User = require('./models/user');
const Account = require('./models/account');

// User.query().insert({
//     user_name: 'tarek',
//     password: '123456',
//     email: "tarek@email.com",
//     role_id: 1,
//     account_id: 1
// }).then(console.log('added'))

async function getUser() {
    const user = await User.query()
        .select('users.id', 'users.user_name', 'email', 'password', 'roles.*')
        .innerJoin('roles', 'users.role_id', 'roles.id')
        .where('roles.id', 1)
    console.log(user[0]);
}

// getUser()
// const u = { name: 'tarek' }
// const { name, password } = u;
// console.log(name, password ? password : 'ss');
///////////////////////////////////

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/user', userRouter);
app.use('/api/accounts', accountRouter);
app.use('/api/groups', groupRouter);
app.use("/api/devices", deviceRouter);
app.use('/api/counts', miscRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is listing on port ' + port)
})