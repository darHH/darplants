import React from 'react';

import InstagramFeed from '../components/InstagramFeed';
import LandingPage from '../components/LandingPage';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <InstagramFeed />
      {/* more to come... contact me! */}
    </>
  );
}