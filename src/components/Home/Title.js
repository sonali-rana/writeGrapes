import React from 'react'
import {Link} from "react-router-dom";

export default function Title() {
    return (
       <div style={{display:"flex",marginLeft:"120px",marginRight:"120px"}}>
         <div style={{flex:1,textAlign:"center"}}>
         <img src={require("./poetry.webp")} width="300px" height="200px"/>
         <Link to="/poem_topics"><h4 style={{color:"#494747"}}>Poetry</h4></Link>
         </div>
         <div style={{flex:1,textAlign:"center"}}>
         <img src={require("./story.jpg")} width="300px" height="200px"/>
         <Link to="/story_topics"><h4 style={{color:"#494747"}}>Stories</h4></Link>
         </div>
       </div>    
  )
}
