const {Client} = require('pg');

const client = new Client({
    host :"localhost",
    port:5432,
    user: "postgres",
    password : "saad",
    database : "Libraray management System"
})

client.on("connect",()=>{
    console.log("Database Connection");
})


client.on("end",()=>{
    console.log("Connection End");
})


module.exports = client;

