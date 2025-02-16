import React from 'react';

import Navbar from './navbar';
import InstagramFeed from './instagramfeed';

export default function Home() {
  return (
    <>
      <Navbar />
      <InstagramFeed />
      <h1 className="text-3xl">
        HOME
      </h1>
    </>
  );
}