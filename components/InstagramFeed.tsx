"use client";

import React, { useEffect, useState } from 'react';
import { InstagramPost } from '../models/InstagramPost';
import { InstagramService } from '../models/InstagramService';
import { useRouter } from "next/navigation";

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const router = useRouter();
  const instagramService = new InstagramService();


  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await instagramService.fetchPosts();
        console.log(fetchedPosts);       
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    loadPosts();
  }, []);

  const handleImageClick = (post: InstagramPost) => {
    router.push(`/plant/${post.id}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 p-8 md:py-24 md:px-32 lg:px-48">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow-md overflow-hidden">
            <button onClick={() => handleImageClick(post)} className="hover:scale-105 transition-transform duration-300 block w-full">
              <img
                src={post.mediaUrl}
                alt={post.caption || "Instagram Post"}
                className={`w-full h-auto ${post.isSold() ? "opacity-50" : ""}`}
              />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default InstagramFeed;