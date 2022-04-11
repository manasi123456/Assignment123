const mongoose = require ('mongoose')
const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

mongoose.connect("mongodb+srv://firstDB:zwPu7dwJG0RCXU9f@cluster0.kgij2.mongodb.net/YOUR_NAME?retryWrites=true&w=majority")
.then(() => {
    console.log("Connection Successful");
}).catch((err) => console.log("error is here"));




const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
