"use client";

import React, { useEffect, useState } from 'react';
import { InstagramPost } from '../models/InstagramPost';
import { InstagramService } from '../models/InstagramService';
import { useRouter } from "next/navigation";

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [sortBy, setSortBy] = useState<string>('Date'); 
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

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'price') {
      if (a.price == null && b.price == null) return 0; 
      if (a.price == null) return 1;
      if (b.price == null) return -1;
      return a.price - b.price;
    } else if (sortBy === 'availability') {
      return a.isSold() === b.isSold() ? 0 : a.isSold() ? 1 : -1;
    }
    return 0; // Default (no sorting, keep Instagram's API order)
  });

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleImageClick = (post: InstagramPost) => {
    router.push(`/plant/${post.id}`);
  };

  return (
    <div>
      {/* Sorting Dropdown */}
      <div className="flex justify-end py-4 px-12 md:py-2 md:px-36 lg:px-52">
        <label className="mr-2 text-gray-700 font-medium">sort by</label>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="border text-sm rounded-md px-2 py-1 text-[#202A25] appearance-none"
        >
          <option value="default">Date</option>
          <option value="price">Price</option>
          <option value="availability">Availability</option>
        </select>
      </div>

      <div className="h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 py-4 px-8 md:py-2 md:px-32 lg:px-48">
          {sortedPosts.length === 0 ? (
            <p className="text-center text-gray-500">No posts found.</p>
          ) : (
            sortedPosts.map((post) => (
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
      </div>
      <hr className="border-t border-gray-300 my-4 lg:mx-24 md:mx-16 mx-8"></hr>
    </div>
  );
};

export default InstagramFeed;