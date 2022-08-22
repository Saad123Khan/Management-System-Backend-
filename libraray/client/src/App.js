import './App.css';
import React from 'react';
// import {Routes , Route} from 'react-router-dom';
import Dashboard from './Page/Dashboard';
// import About from './pages/About';
// import AddEdit from './pages/AddEdit';
// import View from './pages/View';

function App() {
  return (
     <div className="App">
      <h1>
        Hello
      </h1>
<Dashboard/>
        {/* <Routes>
          <Route exact path="/userlist" element={<Home/>} />
          <Route exact path="/booklist" element={<About/>} />
          <Route exact path="/user" element={<AddEdit />} />
          <Route exact path="/book" element={<View />} />
        </Routes> */}
    </div>
  );
}

export default App;
