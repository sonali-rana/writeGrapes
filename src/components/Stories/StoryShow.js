import React from 'react'
import { useParams } from 'react-router-dom'
export default function StoryShow(props) {
    const styles={
          backgroundColor:"#D8A7B1",
          border:"5px dotted white",
          marginLeft:"20%",
          width:"60%",
          paddingTop:"2%",
          paddingBottom:"2%",
          textAlign:"center",
          color:"#6F1931"
    }
    const title= useParams();
    return (
        props.stories.map((story)=>{
        return  story.title===title.title?
         <div className=" mt-2" style={styles}>
             <h2>{story.title}<br/></h2><h5 style={{color:"white"}}>by {story.writer}</h5>
             <hr style={{width:"70%",border:"1px solid white"}}/>
             <div dangerouslySetInnerHTML={{__html:story.story}}></div>
         </div>:""

    })
    )
}
