const dbConnect = require('./mongodb');

const showData =async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
showData();