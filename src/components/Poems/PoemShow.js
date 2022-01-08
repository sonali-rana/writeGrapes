import React from 'react'
import { useParams } from 'react-router-dom'

export default function PoemShow(props) {
    const title= useParams();
    console.log(title.title);
    return (
        props.poems.map((poem)=>{
            return  poem.title===title.title?
            <div className=" mt-2" style={{backgroundColor:" #fff",border:"2px dotted #B24DAB",marginLeft:"20%",width:"60%",paddingTop:"2%",paddingBottom:"2%",textAlign:"center",color:"#6F1931"}}>
             <h2>{poem.title}<br/></h2><h5>by {poem.writer}</h5>
             <hr style={{width:"70%",border:"1px solid #679966"}}/>
             <div dangerouslySetInnerHTML={{__html:poem.poem}} ></div>
            </div>:""
    })
    
        

    )
}
