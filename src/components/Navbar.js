import React from "react";
import "./Navbar.css";
import Logo from "./Logo.png";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
   <div className="blk">
   <div className="logo">
     <img src={Logo} width="300"/>
   </div>
   <div className="nav">
     <Link to="/home" style={{color:"gray",marginRight:"20px"}}>Home</Link>
     <Link to="/contact" style={{color:"gray"}}>Contact Us</Link>
   </div>
   </div>
  );
}
