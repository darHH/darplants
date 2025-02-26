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
    const fetchPlant = async () => {
      try {
        const fetchedPosts = await instagramService.fetchPosts();
        const foundPlant = fetchedPosts.find((post) => post.id === id);
        if (foundPlant) {
          setPlant(foundPlant);
        } else {
          console.error("Plant not found");
        }
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    };

    fetchPlant();
  }, [id]);

  if (!plant) {
    return <p className="text-center text-gray-500">Loading plant details...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back Button
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
      >
        Back
      </button> */}

      {/* Plant Image */}
      <div className="relative w-full overflow-hidden shadow-lg">
        <img
          src={plant.mediaUrl}
          alt={plant.plantName}
          className="w-full object-cover"
        />
      </div>

      {/* Plant Info */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{plant.plantName}</h1>
        <p className="text-gray-500 italic">{plant.fullName}</p>

        {/* Price */}
        <p className="text-xl font-semibold mt-2">
          {plant.price ? `$${plant.price}` : "Not for Sale"}
        </p>

        {/* Instagram Caption */}
        <p className="text-gray-600 mt-4">{plant.igDescription}</p>

        {/* Water & Sun Requirements */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Care Instructions</h3>
          <div className="mt-2">
            <p><span className="font-semibold">💧 Water:</span> {plant.waterGuide}</p>
            <p><span className="font-semibold">☀️ Sunlight:</span> {plant.sunGuide}</p>
          </div>

          {/* Sunlight Rating (1-5 stars) */}
          <div className="mt-3">
            <span className="font-semibold">☀️ Sun Rating:</span>
            {"★".repeat(plant.sunRating)}{"☆".repeat(5 - plant.sunRating)}
          </div>
        </div>

        {/* Buy on Instagram Button */}
        <a
          href={plant.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-6 px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
        >
          🌿 Buy on Instagram
        </a>
      </div>
    </div>
  );
};

export default PlantDetails;