import React, { useState } from "react";
import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";
import Caption from "./assets/Components/Caption";
import CaptionArea from "./assets/Components/CaptionArea";

function App(){
  const [showCaptionUpload, setShowCaptionUpload] = useState(true);
  const [showCaptionResult, setShowCaptionResult] = useState(false);
  
  const handleImageUploaded = (uploaded) => {
    if (uploaded) {
      setShowCaptionUpload(false);
      setShowCaptionResult(true);
    }
  }

  return(
    <div className="h-screen overflow-hidden">
      <Header/>
      {showCaptionUpload && <Caption uploadfunctionality={handleImageUploaded}/>}
      {showCaptionResult && <CaptionArea/>}
      <Footer/>
    </div>
  )
}
  
export default App
