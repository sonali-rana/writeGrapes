import React, { useState } from 'react'
import Poems from './Poems';

export default function AddPoems({poems,onDelete,addPoem}) {
    const [title, setTitle] = useState("");
    const [poem,setPoem] = useState("");
    const [writer,setWriter] = useState("");  
    const onSubmit=(e)=>{
         e.preventDefault();
         if(!title || !poem)
         {
           alert("must add title and poem");
         }
         addPoem(title,poem,writer);
         title="";
         poem="";
         writer=" ";
    }  
    return (<><div className="container m-5">
        <div className="mb-3">
  <label  className="form-label">Title</label>
  <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} />
</div>
<div className="mb-3">
  <label className="form-label">Content</label>
  <textarea className="form-control" rows="3" value={poem} onChange={(e)=>setPoem(e.target.value)}></textarea>
</div>
<div className="mb-3">
  <label className="form-label">Poet</label>
  <input type="text" className="form-control" value={writer} onChange={(e)=>setWriter(e.target.value)}/>
</div>
<button type="button" class="btn btn-success" onClick={onSubmit}>Add</button>
</div>
<Poems poems={poems} onDelete={onDelete}/>
</>
    )
}
