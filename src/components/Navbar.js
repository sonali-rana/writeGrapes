import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
   <div className="blk">
   <div className="logo">
     <img src={require("./Logo.png")} width="300"/>
   </div>
   <div className="nav">
     <Link to="/home" style={{color:"gray",marginRight:"20px"}}>Home</Link>
     <Link to="/contact" style={{color:"gray"}}>Contact Us</Link>
   </div>
   </div>
  );
}
