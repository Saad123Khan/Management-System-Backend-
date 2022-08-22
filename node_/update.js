const dbConnect = require('./mongodb');

const update = async() => {
  let data = await dbConnect();
  let result = await data.updateMany(
    {name : 'Saad'} ,
    {$set : {name : "Maliha" , email : "maliha@gmail.com" }}
  );

  if(result.acknowledged)
    {

        console.log("Data Updated");
    }
}
update();
