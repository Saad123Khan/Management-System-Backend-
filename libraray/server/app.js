const client = require('./db');

(async()=>
{

    await client.connect();
const result = await client.query("select * from Users=$1");

        console.log(result.rows);
    client.end();

})();

(async()=>
{

    await client.connect();

    const firstname = "",lastname="" ,bookname="",bookauthor="",dateofborrow="",dateofreturn="" ;
const result = await client.query("insert into table (firstname,lastname,bookname,bookauthor,dateofborrow,dateofreturn) values($1 , $2) RETURNING",[firstname,lastname,bookname,bookauthor,dateofborrow,dateofreturn]);

        console.log(result.rows);
        console.log(result.rowCount);
        
    client.end();

})();

(async()=>
{

    await client.connect();
    const firstname = ""
    const lastname = ""
const result = await client.query("insert into Books (firstname,lastname) values($1 , $2) RETURNING",[firstname,lastname]);

        console.log(result.rows);
        console.log(result.rowCount);
        
    client.end();

})();
