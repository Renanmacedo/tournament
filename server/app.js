require('dotenv').config();
const Enviroments = require("./helper/enviroments");
const DIR = "dist"
global.APP_ROOT = require('path').join(__dirname + '/../');
const debug = require("debug")("bff:server");
const cors = require("cors");
const express = require('express');
const ejs = require('ejs');
const app = express();

ejs.delimiter = '?';

app.set('port', process.env.PORT_SERVER);

app.engine('html', ejs.renderFile);
app.use(cors());

app.use(express.json({ limit: '1mb' }));

app.use(express.urlencoded({ extended: true }));

if(Enviroments.isDev())
    app.use(express.static(global.APP_ROOT + 'dist/'));

app.use(require('./routes'));

app.listen(process.env.PORT_SERVER, () => {
    debug("listen on:", `http://localhost:${process.env.PORT_SERVER}`);
});
