import React from 'react'
import Poem from './Poem'

export default function Poems(props) {
    console.log("jkhsdcjkwhdgcx");
    return (
        <>
        {props.poems.map((poem)=>{
         
            return <Poem poem={poem}/>
        })}
        </>
    )
}
