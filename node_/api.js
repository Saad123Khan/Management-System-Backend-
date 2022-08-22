const express = require("express");
const dbConnect = require('./mongodb');
const app = express();
const mongodb = require('mongodb');

//Show Data API
app.use(express.json());
app.get('/', async (req,res)=>{
    
    let data = await dbConnect();
    let result = await data.find().toArray();
    res.send(result);
});

//insert data API
app.post('/', async (req,res)=>{
    
    let data = await dbConnect();
    let result = await data.insert(req.body);
    res.send(result);
});

//update data API

app.put('/:name', async (req,res)=>{

let data = await dbConnect();
let result = await data.updateOne(
    {name : req.params.name},
    {$set : req.body});
res.send(result);
});

//delete data API

app.delete('/:id',async (req, res)=>{
let data = await dbConnect();
let result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)});

res.send(result);
});

app.listen(5000);