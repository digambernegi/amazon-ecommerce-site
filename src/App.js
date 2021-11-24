import React from 'react'
import './App.css';
import Nav from "./Nav"
import Home from "./Home"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <div className="app">
      <Router>
      <Routes>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route exact path="/" element={[<Nav/>,<Home/>]} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
