import React from 'react'
import {Link} from "react-router-dom";
import { useState } from 'react';

export default function Admin() {
    const [user, setUser] = useState("xyz");
    const [password, setPassword] = useState("xyz");
    const onSubmit=(e)=>{
         e.preventDefault();
         console.log(user);
         console.log(password);
    }
    return (
        <div className='container' style={{border:"40px solid white"}}>
            <form>
  <div className="mb-3">
    <label className="form-label">Username</label>
    <input type="text" className="form-control" value="user" onChange={(e)=>setUser(e.target.value)}/>
    </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" value="password" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-success" onClick={onSubmit}>Submit</button>
</form>
</div>
    )
}
