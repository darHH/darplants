"use client";

import React, { useEffect, useState } from 'react';
import { InstagramPost } from '../models/InstagramPost';
import { InstagramService } from '../models/InstagramService';
import Modal from './Modal';
import PlantModal from './PlantModal';

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const instagramService = new InstagramService();
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8 md:py-24 md:px-48">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow-md overflow-hidden">
            <a
              onClick={() => handleImageClick(post)}
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
          </div>
        ))
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedPost && <PlantModal post={selectedPost} />}
      </Modal>
    </div>
  );
};

export default InstagramFeed;