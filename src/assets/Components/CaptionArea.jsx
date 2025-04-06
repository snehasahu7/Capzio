import React, { useState, useEffect } from "react";

function CaptionArea(){
    const [captionData, setCaptionData] = useState({
        image: null,
        caption: ""
    });
    
    // Load caption data from localStorage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('captionData');
        if (storedData) {
            setCaptionData(JSON.parse(storedData));
        }
    }, []);

    return(
        <div className="bg-stone-200 h-screen w-full flex justify-center">
            <div className="flex justify-center pt-14">
                <div className="h-90 w-150 border-1 border-amber-900 bg-stone-300 rounded-2xl shadow-xl shadow-gray-500 mx-10 p-4 flex items-center justify-center">
                    {captionData.image ? (
                        <img 
                            src={captionData.image} 
                            alt="Uploaded image" 
                            className="max-w-full max-h-80 object-contain rounded"
                        />
                    ) : (
                        <p className="text-gray-500">No image uploaded</p>
                    )}
                </div>
                <div className="h-90 w-150 border-1 border-amber-900 bg-stone-300 rounded-2xl shadow-xl shadow-gray-500 mx-10">
                    <h1 className="text-2xl text-center mt-5 text-amber-950">Your Perfect Caption is here!</h1>
                    <div className="mt-8 p-4 bg-white rounded-lg shadow mx-4 mb-4">
                        {captionData.caption ? (
                            <p className="text-lg text-center font-medium text-gray-800">{captionData.caption}</p>
                        ) : (
                            <p className="text-center text-gray-500">Caption is loading or unavailable</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaptionArea;