"use client";

import { useRouter } from "next/router";

const CharacterDetails: React.FC = () => {
  const router = useRouter();
  const { name, hoverImageUrl, description } = router.query; // Get query parameters

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${hoverImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-70 p-6 rounded-lg text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">{name}</h1>
        <p className="text-lg">{description}</p>
        <button
          className="mt-6 px-4 py-2 bg-gray-800 rounded hover:bg-gray-600"
          onClick={() => router.back()} // Navigate back to the previous page
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CharacterDetails;
