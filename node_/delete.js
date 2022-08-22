const dbConnect = require('./mongodb');

const del = async () => {
  const data = await dbConnect();
  const result = await data.deleteMany({name : "note5"});
  
  if(result.acknowledged)
  {

      console.log("Data Deleted",result.deletedCount);
  }
}

del();
