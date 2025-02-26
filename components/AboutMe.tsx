import React from 'react';
import '../styles/global.css';

export default function AboutMe() {
    return (
        <div className="container min-h-full bg-[#F5F5F5] relative">
            <div className="px-48 py-28 max-w-5xl">
                <h1 className="text-[#202A25] lg:text-6xl text-4xl font-semibold mb-6">
                    Dar's Houseplants
                </h1>
                <p className="text-[#465D52]lg:text-md text-sm">
                   I love styling and caring for plants, and sharing them helps me spread the joy they bring. Each plant is repotted with love by me (unless stated otherwise), to ensure they thrive and look their best in their new homes. Here, you can browse and read information related to each plant, but adoption of any requires you to contact me via instagram or email at the bottom of this website (for now :0). I try to release a new plant every weekend. Thank you so much for stopping by!
                </p>
            </div>
            <img></img>
            <hr className="border-t border-gray-300 my-4 mx-48"></hr>
        </div>

    );
}