"use strict";
exports.__esModule = true;
exports.app = void 0;
/**
 * This file should default export the express application - this is for `index.spec.ts` to be able to test it.
 */
var util_1 = require("./util");
var express = require("express");
//import express from "express";
//const express = require('express');
//https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
//can only be default-imported using the 'esModuleInterop' flag
var app = express();
exports.app = app;
app.use(express.json());
var port = process.env.PORT || 3000;
app.post('/', function (req, res) {
    console.log(req.body.numbers);
    console.log(util_1.averageOddPositiveIntegers(req.body.numbers));
    res.status(200).end();
});
app.listen(port, function () {
    console.log("listening " + port);
});
app.get('/', function (req, res) {
    res.send("hi");
});
