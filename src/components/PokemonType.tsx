import React from "react";

const typeColors: { [key: string]: string } = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-500",
  ice: "bg-blue-300",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-indigo-300",
  psychic: "bg-pink-500",
  bug: "bg-green-700",
  rock: "bg-yellow-600",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-700",
  dark: "bg-gray-700",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
  // Add more types as needed
};

export default function PokemonType({ type }: { type: string }) {
  const colorClass = typeColors[type.toLowerCase()] || "bg-gray-400";

  return (
    <button
      className={`${colorClass} text-white font-bold py-1 px-3 rounded shadow-box border-black`}
      style={{ width: "95px" }}
    >
      {type.toUpperCase()}
    </button>
  );
}
