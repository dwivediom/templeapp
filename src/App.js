import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';
import Detail from './components/Detail';

import Home from './components/Home';

function App() {
  return (
    
      
   
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/detail" element={<Detail/>} />
      

    </Routes>

   
     
     
   
   
  
  );
}

export default App;
