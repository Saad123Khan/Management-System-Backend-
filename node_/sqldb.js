const mysql = require("mysql");

const conn = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database :"php"
});
conn.connect((err)=>{
if(err)
{
console.log("Error")
}
else{

  console.log("Connected")
}
})

module.exports = conn ;