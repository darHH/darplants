import React from 'react';

import Navbar from '../components/NavBar';
import InstagramFeed from './InstagramFeed';

export default function Home() {
  return (
    <>
      <Navbar />
      <InstagramFeed />
    </>
  );
}