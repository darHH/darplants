import React from 'react';

import InstagramFeed from '../components/InstagramFeed';
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <>
      <LandingPage />
      {/* about me */}
      <InstagramFeed />
      {/* more to come... contact me! */}
    </>
  );
}