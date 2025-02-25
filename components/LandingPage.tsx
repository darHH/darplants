import React from 'react';
import '../styles/global.css';

export default function LandingPage() {
  return (
    <div className="w-full bg-[url('/images/bonsaiCover2.png')] min-h-screen bg-center bg-cover"> 
      <div className="absolute inset-0"></div>
      <nav className="flex items-center">
            <img className ="m-12 w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 "src = "/images/oglogobig.png"></img>
            <ul className="flex-auto text-center">
                <li className= "list-none inline-block px-4>"><a href="#" className="no-underline text-white px-4 font-nunito font-medium">About</a></li>
                <li className= "list-none inline-block px-4"><a href="#" className="no-underline text-white px-4 font-nunito font-medium">Plants</a></li>                
                <li className= "list-none inline-block px-4>"><a href="#" className="no-underline text-white px-4 font-nunito font-medium">Contact</a></li>            
            </ul>  
        </nav> 
    </div>
  );
}