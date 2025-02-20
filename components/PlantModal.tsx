import React from 'react';
import { InstagramPost } from '@/models/InstagramPost';

interface PlantModalProps {
    post : InstagramPost;
}

const PlantModal: React.FC<PlantModalProps> = ({ post }) => {
    return (
        <div className="bg-white p-1 rounded-lg shadow-lg z-10 h-auto overflow-hidden md:w-5/12">
            <div className="">
                <h1>{post.fullName}</h1>
            </div>
            <div className="w-2/5 rounded-lg">
                <img src ={post.mediaUrl} alt ={'A Plant'} className="rounded-lg h-auto" />
            </div>
            <div className="">
                <h1>test</h1>
            </div>
        </div>
    );
}

export default PlantModal;