import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./components/Admin.js";
import Poems from "./components/Poems.js";

function App() {
  const [poems, setPoems] = useState([
    {
      sno:1,
      title:'xyz',
      poem:'kjhgcds',
      writer:'jhbcvv',
    },
    {
      sno:2,
      title:'abc',
      poem:'kjhgcds',
      writer:'nnbdhsgc',
    },
  ]);
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/home" element={<Home/>}/> 
       <Route exact path="/admin" element={<Admin />}/> 
       <Route exact path="/poems" element={<Poems poems={poems} />}/> 
      </Routes>
    </Router>
  );
}

export default App;
