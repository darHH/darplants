import React from 'react';
import '../styles/global.css';
import ProfilePage from './ProfilePage';
import LogoPage from './LogoPage';

export default function LandingPage() {
  return (
    <div className="w-full bg-[url('/images/bonsaiCover2.png')] min-h-screen bg-center bg-cover"> 
      <div className="absolute inset-0"></div>
      <nav className="flex justify-between items-center">
            <LogoPage/>
            <ProfilePage/>
        </nav> 
    </div>
  );
}