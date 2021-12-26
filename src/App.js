import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./components/Admin.js";

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <Routes>
       <Route exact path="/admin" element={<Admin />}/> 
      </Routes>
    </Router>
  );
}

export default App;
