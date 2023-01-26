import React from 'react';
import './App.css';
import Enteruser from './components/Enteruser';
import Navbar from './components/Navbar';
import Userdetails from './components/Userdetails';
import Sumbit from './components/Submit'

function App() {
  return (
 
    <div className="container">
    < Navbar />
    <Enteruser/>
    <Userdetails/>
    <Sumbit/>
    

    <div className='gradientbg'>

    </div>
    </div>


  );
}

export default App;