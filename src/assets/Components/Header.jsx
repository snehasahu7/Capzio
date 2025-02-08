import React from "react";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

function Header(){
    return(
        <header className="w-full h-35 bg-yellow-500 flex justify-between items-center p-10">
            <div className="flex flex-col ">
                <h1 className="text-5xl text-amber-950">Capzio<TipsAndUpdatesIcon fontSize="large"/></h1>
                <p className="text-sm text-amber-950">Your Perfect Caption in Seconds</p>
            </div>
            
            <div className="flex flex-end">
                <nav className="flex space-x-4">
                <a className="text-xl text-amber-950">About</a>
                <a className="text-xl text-amber-950">Contact</a> 
                </nav>
            </div>
           
          </header>
    )
}

export default Header;