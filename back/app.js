const express = require('express');

const morgan = require('morgan');
const chocolateRouter = require('./routes/chocolateRoutes')

const app = express(); 
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

app.use(express.json());
app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    next();
});
app.use(morgan('dev'));

app.use('/api/v1/chocolates',chocolateRouter);


module.exports = app;



