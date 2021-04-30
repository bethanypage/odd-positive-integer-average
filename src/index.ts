/**
 * This file should default export the express application - this is for `index.spec.ts` to be able to test it.
 */
import { averageOddPositiveIntegers } from './util';
//import express = require('express');
import express from "express";

//const express = require('express');
//https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
//can only be default-imported using the 'esModuleInterop' flag


const app: express.Application = express();
app.use(express.json());
const port = process.env.PORT;


app.post('/', function (req, res)
{

    console.log(req.body.numbers);
    console.log(averageOddPositiveIntegers(req.body.numbers));
    res.status(200).end();
    
});
app.listen(port, () =>
{
    console.log(`listening ${port}`);

});
app.get('/', (req, res) =>
{
    res.send("hi");
    
});

export {app};
