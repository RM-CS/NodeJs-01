// Importing the Modules
const bodyParser = require('body-parser');
const express = require('express'); 
const mongoose = require('mongoose'); 

// Sets the default strictQuery mode for schemas.
mongoose.set('strictQuery', false);

// Importing the cors module
cors = require('cors');

// Importing the db file module
dbConfig=require('./database/db')

// Connectivity
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
        console.log('Database successfully connected')
    },
    error =>{
        console.log('Database not connected' + error)
    }
)

// Setup express.js
const app = express(); //app is an object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// Custom Port for your app
const port = process.env.PORT || 4004;
const server = app.listen(port, () =>{
    console.log('Connected to port ' + port);
})

// Error or crash 
app.use((req, res, next) =>{
    // error via next() method
    setImmediate(()=>{
        next(new Error('Something went wrong'));
    });
});

app.use(function(err, req, res, next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})