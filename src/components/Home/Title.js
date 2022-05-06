import React from 'react'
import {Link} from "react-router-dom";
import Poem from "./poetry.webp";
import Story from "./story.jpg";

export default function Title() {
    return (
       <div style={{display:"flex",marginLeft:"120px",marginRight:"120px"}}>
         <div style={{flex:1,textAlign:"center"}}>
         <img src={Poem} width="300px" height="200px"/>
         <Link to="/poem_topics"><h4 style={{color:"#494747"}}>Poetry</h4></Link>
         </div>
         <div style={{flex:1,textAlign:"center"}}>
         <img src={Story} width="300px" height="200px"/>
         <Link to="/story_topics"><h4 style={{color:"#494747"}}>Stories</h4></Link>
         </div>
       </div>    
  )
}
