import {v4 as uuid} from "uuid";
let users = [];
export const getUsers=(req,res)=>{
    res.send(users);
};
export const createUsers = (req,res)=>
{
    const users = req.body;
    users.push({...users,id:uuid()});
    res.send("User Added Sucessfully");
};
export const getUser = (req , res)=>
{
    const singleUser = users.filter((user) => user.id === req.params.id);
    res.send(singleUser);

};

export const deleteUser = (req , res)=>
{
    users = users.filter((user) => user.id !== req.params.id);
    res.send("User Deleted Sucessfully");

};

export const updateUser = (req , res)=>
{
    const user = users.find((user) => user.id === req.params.id);
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.bookname = req.body.bookname;
    user.bookauthor = req.body.bookauthor;
    user.dateofborrow = req.body.dateofborrow;
    user.dateofreturn = req.body.dateofreturn;
    

    res.send("User Updated Sucessfully");

};


