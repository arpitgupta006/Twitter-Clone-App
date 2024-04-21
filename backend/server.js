const express = require('express');
const PORT = 4000;
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const bodyparser = require('body-parser');

global.__basedir = __dirname;
/*assuming an express app is declared here*/
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

mongoose.connect("mongodb://127.0.0.1:27017");

mongoose.connection.on('connected', () => {
    console.log("DB connected");
})
mongoose.connection.on('error', (error) => {
    console.log("Some error while connecting to DB");
})

require('./models/user_models');
require('./models/post_models');


app.use(cors());
app.use(express.json());

app.use(require('./routes/user_routes'));
app.use(require('./routes/post_routes'));
app.use(require('./routes/file_routes'));


app.listen(PORT, () => {
    console.log("Server started");
});