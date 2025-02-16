"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface InstagramPost {
  id: string;
  media_url: string;
  caption: string;
  permalink: string;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  
  useEffect(() => {
    axios
      .get('https://graph.instagram.com/me/media', {
        params: {
          fields: 'id,media_url,caption,permalink',
          access_token: accessToken,
        },
      })
      .then((response) => {
        const filteredPosts = response.data.data.filter((post: InstagramPost) =>
          post.media_url.includes('jpg')
        );
        setPosts(filteredPosts);
      })
      .catch((error) => {
        console.error('Axios Error:', error.response?.data || error.message);
      });
  }, [accessToken]);

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts found.</p>
      ) : (
        posts.slice(0, -1).map((post) => {
          const captionLines = post.caption ? post.caption.split('\n') : [];
          const lastLine = captionLines.length > 0 ? captionLines[captionLines.length - 1] : '';
          const isSold = lastLine.split(' ').pop() === 'SOLD';

          return (
            <div key={post.id} className="border rounded-lg shadow-md overflow-hidden">
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300 block"
              >
                <img
                  src={post.media_url}
                  alt={post.caption || 'Instagram Post'}
                  className={`w-full h-auto p-4 ${isSold ? 'opacity-50' : ''}`}
                />
              </a>
              <p className="p-2 text-gray-700">{lastLine}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default InstagramFeed;