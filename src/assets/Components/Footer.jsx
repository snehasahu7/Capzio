import React from "react";

function Footer(){
   
        const year = new Date().getFullYear();
        return (

         
           <footer className="h-30 w-full flex items-center bg-yellow-500 justify-center bottom-0 absolute">
               <p>Copyright ⓒ {year}</p>
          </footer>
         
          
        );
    
}

export default Footer;