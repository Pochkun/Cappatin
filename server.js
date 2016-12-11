'use strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.production.config');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    console.log(req.url);
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(8080, '0.0.0.0', function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Listening at http://localhost:8080');
})
import React from "react"

