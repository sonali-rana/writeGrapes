import React from 'react'
import { Link } from 'react-router-dom'

export default function (props) {
    return (
        <div style={{backgroundColor:" #fff",border:"2px dotted #B24DAB",marginLeft:"20%",marginTop:"2%",width:"60%",paddingTop:"2%",paddingBottom:"2%",textAlign:"center"}}>
        {props.poems.map((poem)=>{
         
            return <Link to={"/poemShow/"+poem.title}><h4 style={{color:"#679966"}}>{poem.title}</h4></Link>
            
        })}
        </div>
    )
}
