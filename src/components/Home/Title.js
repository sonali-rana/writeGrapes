import React from 'react'
import {Link} from "react-router-dom";

export default function Title() {
    return (
       <div  className="mt-1" style={{border:"2px dotted #D8A7B1",marginLeft:"20%",marginRight:"20%",padding:"5%"}}>
        <div className="container-md">
            <div className="container px-4">
            <h4 style={{color:"#679966",textAlign:"center",marginBottom:"10px"}}>what would you go for first?</h4>
  <div className="row gx-5">
    <div className="col ">
      <Link to="/poem_topics"><div style={{height:"100px",width:"100px",backgroundColor:"#D8A7B1",marginLeft:"15%",color:"#fff",textDecoration:"None",padding:"10%"}}>Poems</div></Link>
    </div>
    <div className="col">
      <Link to="/story_topics"><div style={{height:"100px",width:"100px",backgroundColor:"#D8A7B1",color:"#fff",marginLeft:"15%",textDecoration:"None",padding:"10%"}}>Short Stories</div></Link>
      </div>
  </div>
</div>
       </div>
        </div>
    )
}
