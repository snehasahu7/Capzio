import React from "react";

function CaptionArea(){
    return(
        <div className="bg-stone-200 h-screen w-full flex justify-center">
            <div className="flex justify-center pt-14">
                <div className="h-90 w-150 border-1 border-amber-900 bg-stone-300 rounded-2xl shadow-xl shadow-gray-500 mx-10">
                    
                </div>
                <div className="h-90 w-150 border-1 border-amber-900 bg-stone-300 rounded-2xl shadow-xl shadow-gray-500 mx-10">
                    <h1 className="text-2xl text-center mt-5 text-amber-950">Your Perfect Caption is here!</h1>
                </div>
            </div>
        </div>
    )
}

export default CaptionArea;