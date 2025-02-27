"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { InstagramService } from "../../../models/InstagramService";
import { InstagramPost } from "../../../models/InstagramPost";

const PlantDetails: React.FC = () => {
  const { id } = useParams(); 
  const router = useRouter();
  const [plant, setPlant] = useState<InstagramPost | null>(null);
  const instagramService = new InstagramService();

  useEffect(() => {
    let isMounted = true; // Prevent state update on unmounted component
    const fetchPlant = async () => {
      try {
        const fetchedPosts = await instagramService.fetchPosts();
        const foundPlant = fetchedPosts.find((post) => post.id === id);
        if (foundPlant && isMounted) {
          setPlant(foundPlant);
        }
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    };
  
    fetchPlant();
  
    return () => {
      isMounted = false; // Cleanup function
    };
  }, [id]);

  if (!plant) {
    return <p className="text-center text-gray-500">Loading plant details...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative w-full overflow-hidden shadow-lg">
        <img
          src={plant.mediaUrl}
          alt={plant.plantName}
          className="w-full object-cover"
        />
      </div>

      {/* Plant Info Container */}
      <div className="m-8">
        <h1 className="text-[#202A25] text-3xl font-bold">{plant.plantName}</h1>
        <p className="text-[#465D52] italic">{plant.fullName}</p>

        {/* Price */}
        <p className="text-xl font-semibold mt-2">
          {plant.price ? `$${plant.price}` : "Sold!"}
        </p>

        {/* Instagram Caption */}
        <p className="text-[#465D52] mt-4">{plant.igDescription}</p>

        {/* Care and Purchase container */}    
        <div className="mt-6">

          <h3 className="text-lg font-semibold">Care Instructions</h3>
        {/* Water Requirements */}
        <div className="mt-2">
          <p className="flex gap-2">
            <span className="font-semibold">Water Frequency (per week):</span>
            <span style={{ display: "flex", gap: "0px", alignItems: "center" }}>
              {Array.from({ length: 7 }).map((_, i) => {
                const fullDrops = Math.floor(plant.waterFrequency ?? 0); 
                const hasHalfDrop = (plant.waterFrequency ?? 0) % 1 !== 0; 

                let imgSrc = "/images/emptywaterblack.png"; 

                if (i < fullDrops) {
                  imgSrc = "/images/fullwaterblack.png"; 
                } else if (i === fullDrops && hasHalfDrop) {
                  imgSrc = "/images/halfwaterblack.png"; 
                }
                return (
                  <img
                    key={i}
                    src={imgSrc}
                    style={{ width: "18px", margin: "0px" }}
                  />
                );
              })}
            </span>
          </p>
          <p className="text-[#465D52] text-sm italic">{plant.waterGuide}</p>
        </div>

          {/* Sun Requirement */}
          <div className="mt-2">
            <p className="flex gap-2">
              <span className="font-semibold">Sunlight Requirement:</span>
              <span style={{ display: "flex", gap: "0px", alignItems: "center" }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <img
                  key={i}
                  src={i < plant.sunRating ? "/images/fullsunblack.png" : "/images/emptysunblack.png"}
                  style={{ width: "20px", margin: "0px" }}
                />
              ))}
              </span>
              </p>
              <p className="text-[#465D52] text-sm italic">{plant.sunGuide}</p>
          </div>



          <div className="flex justify-between mt-6 gap-4">
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="w-1/2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
              Back to Plants
            </button>
            {/* Buy on Instagram Button */}
            <a
              href={plant.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 text-center px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
              >
              Buy on Instagram
            </a>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;