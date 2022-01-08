import React from 'react'

export default function Poem({poem,onDelete}) {
    return (
        <div className="container m-5">
            <h3>{poem.title}</h3>
            <p>{poem.poem}</p>
            <h5>{poem.writer}</h5>
            <button type="button" class="btn btn-danger" onClick={()=>{onDelete(poem)}}>Delete</button>
        </div>
    )
}
