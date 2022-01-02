import React from 'react'
import { useParams } from 'react-router-dom'

export default function PoemShow(props) {
    const {sno}= useParams();
    console.log({sno});
    return (
        props.poems.map((poem)=>{
            return  poem.sno===sno.parseInt()?
         <div>
             <h3>{poem.title}</h3>
             <p>{poem.poem}</p>
             <h5>{poem.writer}</h5>
         </div>:"nothing to display"

    })
    
        

    )
}
