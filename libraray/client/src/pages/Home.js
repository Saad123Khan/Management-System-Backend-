import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import axios from 'axios';

function Home() {
  const [backenddata , setbackenddata] = useState([{}])
useEffect(()=>{

  fetch("/api").then(
    response => response.json()
  ).then(
    data =>
    {
      setbackenddata(data)
    }
  )
},[])

const getuser = async()=>
{
const response = await axios.get("http://localhost:5000/users");
if(response.status === 200)
{
  backenddata(response.data)
}
};

console.log("Data", data);
  return (
    <div className="App">
    <Box sx={{p:2, border: "20px solid grey" , backgroundColor:'orange'}}>
            <h1>Book Management Sytem</h1>
           <NavLink style={{fontSize : 30 , color : 'black'}} activeClassName = "active-class" to="/userlist" >UserList</NavLink>
            <NavLink style={{fontSize : 30 , paddingLeft : '40px' , color : 'black'}}activeClassName = "active-class" to="/booklist">UserEdit</NavLink>
            <NavLink style={{fontSize : 30 , color : 'black' , paddingLeft : '40px'}} activeClassName = "active-class" to="/user" >BookList</NavLink>
            <NavLink style={{fontSize : 30 , paddingLeft : '40px' , color : 'black'}}activeClassName = "active-class" to="/book">BookEdit</NavLink>
            </Box>
    </div>
  );
}

export default Home;
