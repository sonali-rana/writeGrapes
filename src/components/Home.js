import React from 'react'
import Home1 from "./Home1.jpg";
export default function Home() {
    return (
        <div  style={{border:"40px solid #D8A7B1"}}>
        <div className="container-md" style={{backgroundColor:"#D8A7B1"}}>
            <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
      <img src={Home1}/>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
           
       </div>
        </div>
        
    )
}
