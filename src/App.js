import React,{useEffect} from 'react'
import './App.css';
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from "./Components/Login"
import { useStateValue } from './StateProvider';

function App() {
  const[{user},dispatch] = useStateValue();

  return (
    <div className="app">
      {!user? 
      (<Login/>):(
         <Router>
         <Routes>
           <Route path="/Checkout" element={<Checkout/>}/>
           <Route exact path="/" element={[<Nav/>,<Home/>]} />
         </Routes>
       </Router>
      )}
     
    </div>
  );
}

export default App;
