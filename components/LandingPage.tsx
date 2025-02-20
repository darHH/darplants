import React from 'react';

export default function LandingPage() {
  return (
    <div className="w-full bg-[url('/images/land.png')] min-h-screen bg-center bg-cover"> 
        <nav className="flex items-center">
            <img className ="w-32 h-32 "src = "/images/whiteimage.png"></img>
            <ul className="flex-auto text-center">
                <li className= "list-none inline-block px-4>"><a href="#" className="no-underline text-white px-4">Home</a></li>
                <li className= "list-none inline-block px-4>"><a href="#" className="no-underline text-white px-4">About</a></li>                
                <li className= "list-none inline-block px-4>"><a href="#" className="no-underline text-white px-4">Contact</a></li>            
            </ul>  
        </nav> 
    </div>
  );
}