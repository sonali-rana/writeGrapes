import React from 'react'
import Subscribe from "./Subscribe.js";
import Home1 from "./Home1.jpg";
export default function Home() {
    return (<>     <div  className="mt-1" style={{border:"40px solid #D8A7B1"}}>
        <div className="container-md" style={{backgroundColor:"#D8A7B1"}}>
            <div className="container px-4">
  <div className="row gx-5">
    <div className="col">
      <img src={Home1} height="400"/>
    </div>
    <div className="col">
      <h1 className="p-5">Ellen Russell is a content creator and visual storyteller.</h1>
    </div>
  </div>
</div>
           
       </div>
        </div>
          <div className="p-5">
   <h2 className="p-5">Ellen is a multi-disciplinary digital creator who works with fashion, beauty, and lifestyle brands.</h2>
</div>
<Subscribe/>

        </>
        
    )
}
