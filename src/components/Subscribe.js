import React from 'react'

export default function Subscribe() {
    return (
        <div className="mt-1" style={{border:"60px solid #FAE8E0"}}>
            <div className="container-md" style={{backgroundColor:"#FAE8E0"}}>
                <h3 >Subscribe</h3>
                <p className="mt-3" >Sign up for a weekly newsletter with the latest blog posts and exclusive content. In your inbox every Tuesday!</p>
                <div className="row g-3 align-items-center">
  <div className="col-auto">
    <input type="email" className="form-control-lg" placeholder="Enter your email address"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn-lg" style={{backgroundColor:"#D8A7B1"}}>Subscribe</button>
  </div>
</div> 
            </div>
            
        </div>
    )
}
