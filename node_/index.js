// const http = require("http");
// const data = require('./data');

// const datacontroll =(req,res)=>
// {
//     res.writeHead(200,{'contenttype' : 'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }

// http.createServer(datacontroll).listen(4500);


// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,'crud');
// const filepath = `${dirpath}/apple.txt`;

// fs.writeFileSync(filepath,"Hello Hi");

// fs.readFile(filepath,'utf8',(err,item)=>
// {
//   console.log(item);  
// })

// fs.appendFile(filepath,' Saad',(err)=>
// {
//     if(!err)
//     console.log("File is Updated");
// }
// )

// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>
// {
//     if(!err)
//     console.log("File Name is Updated");

// }
// )

// fs.unlinkSync(`${dirpath}/fruit.txt`);


// let a= 20 ;
// let b = 0;

// let waitingdata = new Promise((resolve,reject)=>
// {

//     setTimeout(()=>
//     {
//     resolve(30);
//     },2000)

// })
// waitingdata.then((data)=>{
//     b = data;
//     console.log(a+b)
// })

// app.get('',(req , res)=>{
//     console.log("Data sent by browser",req.query.name)
// res.send("Hello Home " +req.query.name);
// });

// app.get('',(req , res)=>{
//     res.send(`
//     <h1> Hello Home </h1>
//     <a href = "/about">About</a> 
//     <a href = "/help">Help</a>
//     `);
//     });


//     app.get('/about',(req , res)=>{


//         res.send(`
//         <h1>login</h1>
//         <input type = "text" name = username placeholder = "Username" value = "${req.query.name}" /><br><br>
//         <input type = "submit" value = "Submit"/>

//         `);
//     });

//     app.get('/help',(req , res)=>{
//         res.send(data);
//         });


// const publicpath = path.join(__dirname,'public');

// app.set('view engine','ejs');

// app.get("",(req,res)=>{
// res.sendFile(`${publicpath}/home.html`)
// })

// app.use(express.static(publicpath));


// app.get("/profile",(req,res)=>{
//     const user={
//         name : "Saad",
//         skill :['python','java']
//     }
//     res.render('profile',{user});
//     })


// app.get("/about",(req,res)=>{
//     res.sendFile(`${publicpath}/about.html`)
//     })

// app.get("*",(req,res)=>{
//         res.sendFile(`${publicpath}/pagenotfound.html`)
//  })


// const data = require('./data');
// const path = require("path");
// const express = require('express');
// const app = express();
// const reqFilter = require('./middleware');
// app.use(reqFilter);

// app.get('/',(req,res)=>{
// res.send("Hello Home");
// })    


//    app.get('/user',(req,res)=>{
//     res.send("Hello User");
//     })    

//     app.get('/about',reqFilter,(req,res)=>{
//         res.send("Hello About");
//         })    

//     app.get('/contact',reqFilter,(req,res)=>{
//         res.send("Hello Contact");
//         })    

// app.listen(5000);



// const data = require('./data');
// const path = require("path");
// const express = require('express');
// const app = express();
// const reqFilter = require('./middleware');
// const route = express.Router();

// route.use(reqFilter);


// app.get('/',(req,res)=>{
// res.send("Hello Home");
// })    


// app.get('/user',(req,res)=>{
//     res.send("Hello User");
//     })    

//     route.get('/about',(req,res)=>{
//         res.send("Hello About");
//         })    

//     route.get('/contact',(req,res)=>{
//         res.send("Hello Contact");
//         })    

//         app.use('/',route);

// app.listen(5000);



//MongoDb Connection And fetch Data 

// const {MongoClient} = require('mongodb');
// const express =  require('express');
// const app = express();

// const url = 'mongodb://localhost:27017'
// const database = 'e-comm'
// const client = new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('product');
//     let response = await collection.find({}).toArray();
//     console.log(response);

// }
// getData();


// dbConnect().then((res)=>{
//     res.find({name : 'Nokian Max22'}).toArray().then((data)=>
//     {
//         console.warn(data);
//     })
// })



// const mongoose = require("mongoose");


// mongoose.connect("mongodb://localhost:27017/e-comm");
//     const productSchema = new mongoose.Schema({
//         name : String,
//         price : Number,
//         brand : String,
//         category : String 
//     });

// const Save = async()=>{

//     const Product = mongoose.model('product',productSchema);
//     let data = new Product({name : "m11" ,brand :"IPHONe 1", price : "24000" , category : "Mobile"});
//     const result = await data.save();
//     console.log(result)
// }
// //Save();

// const Update = async()=>{

//     const Product = mongoose.model('product',productSchema);
//     let data = await Product.updateMany(
//     {name : "m11" },
//     {
//           $set :{ brand :"Abc", price : 2000 , category : "Mobile"}
//     }
//     )
//     console.log(data);
// }
// //Update()
// const delet = async()=>{

//     const Product = mongoose.model('product',productSchema);
//     let data = await Product.deleteOne({name : "m11" });
//     console.log(data);
// }
// //delet()
// const finddb = async()=>{

//     const Product = mongoose.model('product',productSchema);
//     let data = await Product.find({});
//     console.log(data);
// }

// finddb()


// const Product = require('./product');
// require('./config');
// const express = require('express');
// const app = express(); 


// app.use(express.json());

// //list mongoose api
// app.get('/',async(req,res)=>{
//     let data = await Product.find({});
//     res.send(data);
// });

// //save mongoose api

// app.post('/',async(req,res)=>{
//     let data = new Product(req.body);
//     let result = await data.save();
//     console.log(result);
//     res.send(result);
// });


// //delete mongoose api

// app.delete('/:_id',async(req,res)=>{
//     let data = await Product.deleteOne(req.params);
//     console.log(data);
//     res.send("Deleted");
// });

// //update mongoose api

// app.put('/:_id',async(req,res)=>{
//     let data = await Product.updateOne(req.params,{$set : req.body });
//     console.log(data);
//     res.send("Updated");
// });

// //searchmongoose api
// app.get('/:key',async(req,res)=>{

//     let data = await Product.find(
//        { "$or" :[
//         {"name" :{$regex:req.params.key }},
//         {"brand" :{$regex:req.params.key }},
//         {"string" :{$regex:req.params.key }},
//         {"price" :{$regex:req.params.key }}
//     ]});
//     res.send(data);
// });


// const express = require("express");
// const multer = express("multer");
// const app = express();

// const upload = multer ({
//       storage : multer.diskStorage({
//         destination:function(req,file,cb)
//         {
//             cb(null,"uploads")
//         },
//         filename:function(req,file,cb)
//         {
//             cb(null,file,fieldname+"-"+Date.now()+".jpg")
//         }
//       })
// }).single("user_file");



// app.get("/",upload,(req,res)=>{
// res.send("Hello");
// });


const express = require('express');
const app = express();
const conn = require('./sqldb');

app.use(express.json());

//Get Api Sql Select data 

app.get("", (req, res) => {
    conn.query("select * from login", (err, result) => {
        if (err) {
            res.send("Error query")
        }
        else {
            res.send(result)
        }
    })

});

//Post Api Sql Saved data 

app.post("",(req, res) => {
    const data = req.body;
    conn.query('Insert into login SET ?',data, (err, result,fields) => {
        
        if (err) err ; 
            res.send(result)
    })
});

//Put Api Sql Updated data 

app.put("/:Id",(req, res) => {
    const data = [req.body.Name,req.body.Password,req.params.Id];
    conn.query('Update login SET Name = ? , Password = ? where Id = ?',data ,(err, result,fields) => {
        if (err) err ; 
            res.send(result)
    })
});


//Delete Api Sql Updated data 

app.delete("/:Id",(req, res) => {
    const data = [req.params.Id];
    conn.query('Delete from login  where Id = ?',data ,(err, result,fields) => {
        if (err) err ; 
            res.send(result)
    })
});

app.listen(5000)





