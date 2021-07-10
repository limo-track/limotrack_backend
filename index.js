require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user');
const accountRouter = require('./routes/accounts');
const groupRouter = require('./routes/groups');
const deviceRouter = require('./routes/devices');
const miscRouter = require('./routes/misc');
const pathRouter = require('./routes/paths');
const carRouter = require('./routes/cars');
const driverRouter = require('./routes/drivers');

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
app.use('/api/paths', pathRouter);
app.use('/api/cars', carRouter);
app.use('/api/drivers', driverRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is listing on port ' + port)
})