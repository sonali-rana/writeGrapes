import React from 'react'

export default function Poem({poem}) {
    return (
        <div className="conatiner my-5">
            <h3>{poem.title}</h3>
            <p>{poem.poem}</p>
            <h5>{poem.writer}</h5>
        </div>
    )
}
