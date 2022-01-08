import React from 'react'
import Story from './Story'

export default function Stories(props) {
    return (
         <>
         {props.stories.length===0?"No stories to diaplay":
            props.stories.map((story)=>{
         
            return <Story story={story} onDel={props.onDel}/>
            
        })}
        </>
    )
}
