import React from 'react';
import '../styles/global.css';

export default function LandingPage() {
  return (
    <div className="w-full bg-[url('/images/bonsaiCover2.png')] min-h-screen bg-center bg-cover"> 
      <div className="absolute inset-0"></div>
      <nav className="flex items-center">
            <img className ="w-32 h-32 "src = "/images/whiteimage.png"></img>
            <ul className="flex-auto text-center">
                <li className= "list-none inline-block px-4>"><a href="#" className="no-underline text-white px-4 font-nunito font-medium">Home</a></li>
                <li className= "list-none inline-block px-4"><a href="#" className="no-underline text-white px-4 font-nunito font-medium">About</a></li>                
                <li className= "list-none inline-block px-4>"><a href="#" className="no-underline text-white px-4 font-nunito font-medium">Contact</a></li>            
            </ul>  
        </nav> 
        <div>
            <h1 className="text-6xl font-semibold text-white">welcome</h1>
            <p>Test</p>
        </div>
    </div>
  );
}