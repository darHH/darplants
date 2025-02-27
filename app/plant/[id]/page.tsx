"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { InstagramPost } from "../../../models/InstagramPost";


interface InstagramPostData {
  id: string;
  mediaUrl: string;
  caption: string;
  permalink: string;
}

const PlantDetails: React.FC = () => {
  const { id } = useParams(); 
  const router = useRouter();
  const [plant, setPlant] = useState<InstagramPost | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await fetch("/api/instagram");
        const fetchedPosts: InstagramPostData[] = await response.json();

        const instagramPosts = fetchedPosts.map(
          (post: InstagramPostData) =>
            new InstagramPost(post.id, post.mediaUrl, post.caption, post.permalink)
        );

        const foundPlant = instagramPosts.find(
          (post) => post.id === id || post.id === String(id)
        );

        if (foundPlant) {
          await foundPlant.getPlantData();
          setPlant(foundPlant);
          setLoading(false);  // Set loading to false after the data is populated
        }
      } catch (error) {
        console.error("Error fetching plant data:", error);
        setLoading(false);  // Set loading to false if there's an error
      }
    };

    fetchPlant();
  }, [id]);

  if (!plant) {
    return <p className="text-center pt-8 text-gray-500">Loading plant details...</p>;
  }

  console.log('Water Frequency BEFORE:', plant.waterFrequency);
  console.log('Sun Rating BEFORE:', plant.sunRating);
  return (
    <div className="max-w-3xl mx-auto md:pt-12 md:w-1/2 lg:w-1/3">
      <div className="relative w-full overflow-hidden shadow-lg md:rounded-lg md:w-3/4 lg:w-full mx-auto">
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
                    alt="water"
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
                  alt= "Sun"
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
              className="w-1/2 font-bold px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
              Back to Plants
            </button>
            {/* Buy on Instagram Button */}
            <a
              href={plant.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 text-center px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
              >
              View on Instagram
            </a>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;