reqFilter=(req,res,next)=>
{
    console.log('reqFilter');
    if(!req.query.age)
    {
      res.send("Please Provide Age");
    }
    if(req.query.age<18)
    {
      res.send("You can not access this page");
    }
    
    else{
        next();
    }
}
module.exports = reqFilter