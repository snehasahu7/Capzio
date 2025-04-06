import React, {useState} from "react";

function Caption({uploadfunctionality}){
    
    const[upl,setupl]=useState(false);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const handleupload = async () => {
        if (!file) {
            console.log("No file selected.");
            return;
        }
        
        setLoading(true);
        
        // Create form data to send the file
        const formData = new FormData();
        formData.append('image', file);
        
        try {
            // Send the image to the backend using proxy
            const response = await fetch('/api/predict-caption', {
                method: 'POST',
                body: formData,
            });
            
            if (!response.ok) {
                throw new Error('Failed to upload image');
            }
            
            const result = await response.json();
            
            // Store result in localStorage or context to use in CaptionArea
            localStorage.setItem('captionData', JSON.stringify({
                image: preview,
                caption: result.prediction
            }));
            
            // Continue to next step
            setupl(true);
            uploadfunctionality(true);
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Failed to upload image. Please try again.");
        } finally {
            setLoading(false);
        }
    }
  
    const handleFileChange = (event) => {
      const uploadedFile = event.target.files[0];
      setFile(uploadedFile);
      
      if (uploadedFile) {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          setPreview(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleupload();
    };
  
   
    return(
          <div className="bg-stone-200 h-screen w-full flex justify-center">
                 <div className="h-60 w-120 bg-stone-300 rounded-2xl mt-20 shadow-xl shadow-gray-500 border-1 border-amber-900 ">
                    <div className=" items center py-10 px-10">
                        
                        <h1 className="font-bold text-amber-950 text-2xl text-center ">UPLOAD YOUR PICTURE HERE</h1>
                        <form className="flex items-center py-10  " onSubmit={handleSubmit}>
                              <div className="flex flex-col">
                                 <input className="border-1 w-70 " type="file" onChange={handleFileChange} accept="image/*" />
                                 {file && <p className="mt-2">Selected File: {file.name}</p>}
                              </div>
                              <button 
                                disabled={!file || loading}
                                className={`border-1 mx-10 px-2 rounded-lg ${!file || loading ? 'bg-gray-400' : 'bg-amber-950'} text-stone-50 shadow-lg shadow-gray-500 border-black cursor-pointer`} 
                                type="submit">
                                {loading ? 'Processing...' : 'Upload'}
                              </button>
                        </form> 
                        
                        {preview && <img className="hidden" src={preview} alt="Preview" style={{ width: '200px', marginTop: '1px', height:'70px' }} />}
                    </div>
                  </div>
          </div>
    )
}

export default Caption;

