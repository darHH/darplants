import React from 'react';

import InstagramFeed from '../components/InstagramFeed';
import LandingPage from '../components/LandingPage';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';

export default function Home() {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <InstagramFeed />
      <ContactMe />
    </>
  );
}