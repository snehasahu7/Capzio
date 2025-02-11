import React, {useState} from "react";

function Caption({uploadfunctionality}){
    
    const[upl,setupl]=useState(false);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleupload=()=>{
        setupl(!upl)
        uploadfunctionality(!upl)
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
      if (file) {
        console.log("File selected:", file.name);
        // You can upload the file here
      } else {
        console.log("No file selected.");
      }
    };
  
   
    return(
          <div className="bg-stone-200 h-screen w-full flex justify-center">
            
              
                 <div className="h-60 w-120 bg-stone-300 rounded-2xl mt-20 shadow-xl shadow-gray-500 border-1 border-amber-900 ">
                    <div className=" items center py-10 px-10">
                        
                        <h1 className="font-bold text-amber-950 text-2xl text-center ">UPLOAD YOUR PICTURE HERE</h1>
                        <form className="flex items-center py-10  " onSubmit={handleSubmit}>
                              <div className="flex flex-col">
                                 <input className="border-1 w-70 " type="file" onChange={handleFileChange} />
                                 {file && <p className="mt-2">Selected File: {file.name}</p>}
                              </div>
                              <button onClick={handleupload} className="border-1 mx-10 px-2 rounded-lg bg-amber-950 text-stone-50 shadow-lg shadow-gray-500 border-black" type="submit">Upload</button>
                        </form> 
                        
                        {preview && <img className="hidden" src={preview} alt="Preview" style={{ width: '200px', marginTop: '1px', height:'70px' }} />}
                    </div>
                       
      
                       
                  </div>
               
          </div>
    )
}

export default Caption;

