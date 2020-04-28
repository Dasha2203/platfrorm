//import * as db from './editPost';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const postroutes = require('./routes/PostRoute');

var posts = require('./models/Post');
const cors = require('cors');

const users = require('./routes/user'); 
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

//db.setUpConnection();
const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

// app.get('/', function(req, res) {
//     res.send('hello');
// });

// app.get('/post',(req,res)=>{
//     posts.find().then(data=>res.send(data));

// })

app.use(cors());
const PORT = process.env.PORT || 5000;
app.use('/posts', postroutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});