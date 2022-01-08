import React, { useState } from 'react'
import Stories from './Stories.js';

export default function AddStories({stories,onDel,addStory}) {
     const [title, setTitle] = useState("");
    const [story,setStory] = useState("");
    const [writer,setWriter] = useState("");  
    const onSubmit=(e)=>{
         e.preventDefault();
         if(!title || !story)
         {
           alert("must add title and story");
         }
         addStory(title,story,writer);
         title="";
         story="";
         writer="";
    }  
    return (<><div className="container m-5">
        <div className="mb-3">
  <label  className="form-label">Title</label>
  <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} />
</div>
<div className="mb-3">
  <label className="form-label">Content</label>
  <textarea className="form-control" rows="3" value={story} onChange={(e)=>setStory(e.target.value)}></textarea>
</div>
<div className="mb-3">
  <label className="form-label">Poet</label>
  <input type="text" className="form-control" value={writer} onChange={(e)=>setWriter(e.target.value)}/>
</div>
<button type="button" class="btn btn-success" onClick={onSubmit}>Add</button>
</div>
<Stories stories={stories} onDel={onDel}/>
</>
    )
}