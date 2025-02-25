import React from 'react';
import '../styles/global.css';

export default function LandingPage() {
  return (
    <div className="w-full bg-[url('/images/bonsaiCover2.png')] min-h-screen bg-center bg-cover"> 
      <div className="absolute inset-0"></div>
      <nav className="flex items-center">
            <img className="m-12 w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 drop-shadow-lg" src="/images/oglogobig.png"></img>
            <ul className="flex-auto text-center">
                <li className= "list-none inline-block px-6>">
                  <a href="#" className="no-underline text-white text-lg px-6 font-nunito font-semibold">
                    About
                  </a>
                </li>
                <li className= "list-none inline-block px-6">
                  <a href="#" className="no-underline text-white text-lg px-6 font-nunito font-semibold">
                    Plants
                  </a>
                </li>                
                <li className= "list-none inline-block px-6>">
                  <a href="#" className="no-underline text-white text-lg px-6 font-nunito font-semibold">
                    Contact
                  </a>
                </li>            
            </ul>  
            <img className="mr-16 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" src="/images/robot.png"></img>
        </nav> 
    </div>
  );
}