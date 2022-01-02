import React from 'react'
import { Link } from 'react-router-dom'

export default function (props) {
    return (
        <>
        {props.poems.map((poem)=>{
         
            return <Link to="/poemShow/:sno"><h4>{poem.title}</h4></Link>
            
        })}
        </>
    )
}
