require('dotenv').config();
const Enviroments = require("./helper/enviroments");
const debug = require("debug")("bff:server");
const cors = require("cors");
const express = require('express');
const SessionMiddleware = require('./middleware/session')
const ejs = require('ejs');
const app = express();

global.APP_ROOT = require('path').join(__dirname + '/../');

ejs.delimiter = '?';

app.set('port', process.env.PORT);

app.engine('html', ejs.renderFile);
app.use(cors());

app.use(express.json({ limit: '1mb' }));

app.use(express.urlencoded({ extended: true }));
if(Enviroments.isDev())
    app.use(express.static(global.APP_ROOT + 'dist/'));


app.use(SessionMiddleware.createSession)

app.use('/', require('./routes'));


module.exports = app