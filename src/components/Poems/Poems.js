import React from 'react'
import Poem from './Poem'

export default function Poems(props) {
    console.log("jkhsdcjkwhdgcx");
    return (
        <>
        {props.poems.length===0?"No poems to display":
          props.poems.map((poem)=>{
         
            return (
            <Poem poem={poem} onDelete={props.onDelete}/>)
            
        })}
        </>
    )
}
