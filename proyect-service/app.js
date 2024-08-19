let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const dabatase = require('./config/database.config');
const apiRouter = require('./routes/Index.router');



let app = express();
dabatase.connect();
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1',apiRouter);


module.exports = app;
