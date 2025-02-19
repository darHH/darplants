"use client";

import React, { useEffect, useState } from 'react';
import { InstagramPost } from '../models/InstagramPost';
import { InstagramService } from '../models/InstagramService';

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const instagramService = new InstagramService();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await instagramService.fetchPosts();
        console.log(fetchedPosts[1].plantName);
        console.table(fetchedPosts);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts found.</p>
      ) : (
        posts.slice(0, -1).map((post) => (
          <div key={post.id} className="border rounded-lg shadow-md overflow-hidden">
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300 block"
            >
              <img
                src={post.mediaUrl}
                alt={post.caption || 'Instagram Post'}
                className={`w-full h-auto ${post.isSold() ? 'opacity-50' : ''}`}
              />
            </a>
            <p className="p-2 text-gray-700">{post.getLastLine()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default InstagramFeed;