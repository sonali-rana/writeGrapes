import Navbar from "./components/Navbar.js";
import Home from "./components/Home/Home.js";
import './App.css';
import { useState , useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AddPoems from "./components/Poems/AddPoems.js";
import AddStories from "./components/Stories/AddStories";
import PoemTopics from "./components/Poems/PoemTopics.js";
import PoemShow from "./components/Poems/PoemShow.js";
import StoryTopics from "./components/Stories/StoryTopics.js";
import StoryShow from "./components/Stories/StoryShow.js";
import ContactUs from "./components/ContactUs.js";

function App() {
  let initPoem;
  if(localStorage.getItem("poems")===null){
    initPoem=[];
  }
  else{
    initPoem=JSON.parse(localStorage.getItem("poems"));
  }
  const onDelete=(poem)=>{
    console.log("deleting....");
    setPoems(poems.filter((e)=>{
      return e!==poem;
    }));
    localStorage.setItem("poems",JSON.stringify(poems));
  }
  const addPoem=(title,poem,writer)=>{
    console.log("Adding",title,poem,writer);
    let ssno;
    if(poems.length===0){
      ssno=0;
    }
    else{
      ssno = poems[poems.length-1].ssno+1;
    }
    let myPoem={
      ssno:ssno,
      title:title,
      poem:poem,
      writer:writer,
    };
    setPoems([...poems,myPoem]);
    console.log(myPoem);
     
  }
  const [poems, setPoems] = useState(initPoem);
   useEffect(() => {
    localStorage.setItem("poems",JSON.stringify(poems));
  }, [poems])
  let initStory;
  if(localStorage.getItem("stories")===null){
    initStory=[];
  }
  else{
    initStory=JSON.parse(localStorage.getItem("stories"));
  }
  const onDel=(story)=>{
    console.log("deleting....");
    setStories(stories.filter((e)=>{
      return e!==story;
    }));
    localStorage.setItem("stories",JSON.stringify(stories));
  }
  const addStory=(title,story,writer)=>{
    console.log("Adding",title,story,writer);
    let sno;
    if(stories.length===0){
      sno=0;
    }
    else{
      sno = stories[stories.length-1].sno+1;
    }
    let myStory={
      sno:sno,
      title:title,
      story:story,
      writer:writer,
    };
    setStories([...stories,myStory]);
    console.log(myStory);
     
  }
  
  const [stories, setStories] = useState(initStory);
   useEffect(() => {
    localStorage.setItem("stories",JSON.stringify(stories));
  }, [stories])
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
       <Route exact path="/addp" element={<AddPoems poems={poems} onDelete={onDelete} addPoem={addPoem}/>}/> 
        <Route exact path="/adds" element={<AddStories stories={stories} onDel={onDel} addStory={addStory}/>}/> 
       <Route exact path="/poem_topics" element={<PoemTopics poems={poems}/>}/> 
       <Route exact path="/story_topics" element={<StoryTopics stories={stories}/>}/> 
       <Route exact path="/poemShow/:title" element={<PoemShow poems={poems}/>}/> 
       <Route exact path="/storyShow/:title" element={<StoryShow stories={stories}/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
