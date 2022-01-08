import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div  className="m-5" style={{borderBottom:"2px solid #679966"}}>
      <div className="container-md" >
      <div className="container px-4">
      <div className="row gx-5">
       <div className="col">
      <h4  style={{color:"#B24DAB",fontFamily: "'Pacifico', cursive"}}>WriteGrapes</h4>
      </div>
    <div className="col" style={{textAlign:"end"}}>
      <h6 ><Link to="/home" style={{color:"#679966"}}>Home</Link></h6>
      <h6><Link to="/contact" style={{color:"#679966"}}>Contact Us</Link></h6>
    </div>
  </div>
</div>
       </div>
      </div>
  );
}
