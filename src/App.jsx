import React from "react";
import reactDom from "react-dom";
import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";
import Caption from "./assets/Components/Caption";

function App(){
  return(
    <div className="h-screen overflow-hidden">
      <Header/>
      <Caption/>
      <Footer/>
    </div>
  )
}
  


export default App
