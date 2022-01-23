import React from 'react'
import { Link } from 'react-router-dom'

export default function (props) {
    const styles={
          backgroundColor:"#D8A7B1",
          border:"5px dotted white",
          marginLeft:"20%",
          marginTop:"2%",
          width:"60%",
          paddingTop:"2%",
          paddingBottom:"2%",
          textAlign:"center"
    };
    return (
        <div style={styles}>
        {props.poems.map((poem)=>{
         
            return <Link to={"/poemShow/"+poem.title}><h4 style={{color:"white"}}>{poem.title}</h4></Link>
            
        })}
        </div>
    )
}
