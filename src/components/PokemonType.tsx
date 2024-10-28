import React from "react";

const typeColors: { [key: string]: string } = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-500",
  normal: "bg-gray-400",
  // Add more types as needed
};

export default function PokemonType({ type }: { type: string }) {
  const colorClass = typeColors[type.toLowerCase()] || "bg-gray-400";

  return (
    <button
      className={`${colorClass} text-white font-bold py-1 px-3 rounded shadow-box`}
    >
      {type.toUpperCase()}
    </button>
  );
}
