const express = require('express');
const app = express();
const morgan = require('morgan');

const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
var MongoClient = require("mongoose")


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use((req, res, next) => {

//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With ,Content-Type, Accept, Authorization');
//     if (req.method === 'OPTIONS') {
//         Response.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET')
//         return res.status(200).json({});
//     }
//     next();
// })
const advRoutes = require('./routes/adv');
const categoryRoutes = require('./routes/category');
const subCategoryRoutes = require('./routes/subcategory')
const userRoutes = require('./routes/user')
const emailRoutes = require('./routes/email')

var uri = "mongodb+srv://tevendo:tevendo@cluster0-6cjnc.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri,{useNewUrlParser:true},function(err,client){
    console.log("conectado");
});

app.use('/api', advRoutes);
app.use('/api', categoryRoutes);
app.use('/api', subCategoryRoutes);
app.use('/api', userRoutes);
app.use('/api', emailRoutes);


// var swaggerUi = require('swagger-ui-express'),
//     // swaggerDocument = require('./swagger.json');

// // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api/v1', router);

app.use((req, res, next) => {
    res.send("<h1>TEVENDO API</h1>")
    const error = new Error('Not found');
    error.status(404)
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;