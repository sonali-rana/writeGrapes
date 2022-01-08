import React from 'react'

export default function Story({story,onDel}) {
    return (
        <div className="conatiner my-5">
            <h3>{story.title}</h3>
            <p>{story.story}</p>
            <h5>{story.writer}</h5>
             <button type="button" class="btn btn-danger" onClick={()=>{onDel(story)}}>Delete</button>
        </div>
    )
}
