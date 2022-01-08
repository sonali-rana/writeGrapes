import React from 'react'
import Subscribe from "./Subscribe.js";
import Home1 from "./Home1.jpg";
import Title from "./Title.js";
import {Link} from "react-router-dom";
export default function Home() {
    return (<>     <div  className="" style={{border:"40px solid #D8A7B1"}}>
        <div className="container-md" style={{backgroundColor:"#D8A7B1",color:"#494747"}}>
            <div className="container px-4">
  <div className="row gx-5">
    <div className="col">
      <img src={Home1} height="400"/>
    </div>
    <div className="col">
      <h1 className="p-5">Hey There! Welcome to WriteGrapes , We appreciate your interset . Welcome to the world of poetry and fiction.</h1>  
      </div>
  </div>
</div>
       </div>
        </div>
          <div className="p-5 ">
   <h2 className="p-5" style={{color:"#494747"}}>WriteGrapes is a platform for young writers who want to boost their confidence and give a shot for writing and love reading. </h2>
</div>
 <Title />
<Subscribe/>

        </>
        
    )
}
