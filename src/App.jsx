import React, { useState } from "react";
import reactDom from "react-dom";
import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";
import Caption from "./assets/Components/Caption";
import CaptionArea from "./assets/Components/CaptionArea";

function App(){
  const[uploads, setupload]=useState(false);
  const[showcaption, setshowcaption]=useState(true);
  
  const handlechange=(event)=>{
    const values= event.target;
    setupload(values);
    setshowcaption(false);
  }

  return(
    <div className="h-screen overflow-hidden">
      <Header/>
      {showcaption && <Caption uploadfunctionality={handlechange}/>}
      {setupload &&
        <CaptionArea/>}
      <Footer/>
    </div>
  )
}
  


export default App
