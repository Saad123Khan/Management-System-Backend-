const dbConnect = require('./mongodb');
const data = require('./data');


const insert = async()=>{

    const db = await dbConnect();
    const result = await db.insert(data);

    if(result.acknowledged)
    {

        console.log("Data Inserted");
    }
}
insert();