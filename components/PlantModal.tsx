import React from 'react';
import { InstagramPost } from '@/models/InstagramPost';

interface PlantModalProps {
    post : InstagramPost;
}

const PlantModal: React.FC<PlantModalProps> = ({ post }) => {
    return (
        <div className="bg-green-50 rounded-lg shadow-lg z-10 overflow-hidden w-1/4 h-2/3">
            <div className="p-2 text-xs text-center">
                <h1>{post.fullName}</h1>
            </div>
            <div className="">
                <img src ={post.mediaUrl} alt ={'A Plant'} className="h-auto" />
            </div>
            <div className="p-2">
                {post.price !== null ? (
                <button className="bg-green-400 rounded-lg w-3/8">
                    <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="text-xs p-2 text-white font-extrabold">${post.price} SGD</a>
                </button>
                ) : (
                <button className="bg-red-400 rounded-lg w-3/8">
                    <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="text-xs p-2 text-white font-extrabold">sold!</a>
                </button>   
                )}             
            </div>
            <div className="text-xs">
                <p>{post.waterFrequency}</p>
                <p>{post.sunRating}</p>                
                <p>{post.waterGuide}</p>
                <p>{post.sunGuide}</p>
                <p>{post.igDescription}</p>                
            </div>
        </div>
    );
}

export default PlantModal;