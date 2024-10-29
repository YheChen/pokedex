import React, { useState, useEffect } from "react";
import Image from "next/image";
import EvolutionChain from "./EvolutionChain";
import PokemonType from "./PokemonType";

interface PokeDexProps {
  pokemonData: PokemonData | null;
  pokemonSpeciesData: PokemonSpeciesData | null;
  evolutionChainData: any;
}

interface PokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
}

interface PokemonSpeciesData {
  genera: { language: { name: string }; genus: string }[];
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
}

export default function PokeDex({
  pokemonData,
  pokemonSpeciesData,
  evolutionChainData,
}: PokeDexProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Only show loading message if pokemonData is missing
  if (!pokemonData) {
    return (
      <div className="w-[750px] h-[400px] bg-red-600 rounded-lg shadow-lg flex items-center justify-center">
        <p className="text-white font-bold text-xl">Search for a Pokémon!</p>
      </div>
    );
  }

  return (
    <div
      className={`w-[830px] h-[400px] bg-red-600 rounded-lg shadow-lg flex relative p-4 -ml-6 border-2 border-black ${
        !imageLoaded ? "opacity-0" : "opacity-100"
      } transition-opacity duration-500`}
    >
      {/* Info Header positioned at the top */}
      <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-red-800 via-red-600 to-red-800 text-white font-bold text-lg p-2 rounded-t-lg shadow-box text-left pl-4 border-b-2 border-black">
        ▼ INFO
      </div>

      {/* Left Section for Sprite and Evolution Chain */}
      <div className="flex-1 flex flex-col items-center justify-center -mt-8">
        {/* Larger White Circle Background for Sprite */}
        <div className="bg-white w-48 h-48 rounded-full flex items-center justify-center shadow-box mb-4">
          {/* Sprite */}
          {pokemonData.sprites?.front_default ? (
            <Image
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
              width={150}
              height={150}
              className="rounded shadow-box"
              onLoad={() => setImageLoaded(true)} // Set imageLoaded to true once image loads
            />
          ) : (
            <p className="text-gray-500">No image available</p>
          )}
        </div>

        {/* Evolution Chain positioned below the sprite */}
        {evolutionChainData && (
          <EvolutionChain evolutionChain={evolutionChainData} />
        )}
      </div>

      {/* Right Section for Details */}
      <div className="basis-2/3 flex flex-col space-y-2 pl-8 mt-4">
        <div className="bg-white shadow-box border-2 border-black rounded-lg p-3 space-y-2 mt-8">
          <div className="bg-red-500 text-white p-2 rounded flex shadow-box items-center">
            <Image
              src="/images/pokeball.png"
              alt="Pokéball"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="font-bold">{pokemonData.id ?? "N/A"}</span>
            <span className="font-bold pl-12 capitalize ml-4">
              {pokemonData.name ?? "Unknown"}
            </span>
          </div>

          {/* Title */}
          <div className="bg-gray-200 text-center p-2 rounded shadow-box">
            <span className="text-gray-700 capitalize">
              {pokemonSpeciesData?.genera?.find(
                (g: { language: { name: string } }) => g.language.name === "en"
              )?.genus || "Unknown Pokémon"}
            </span>
          </div>

          {/* Types */}
          <div className="flex items-center space-x-2">
            {pokemonData.types &&
              pokemonData.types.map((typeInfo: { type: { name: string } }) => (
                <PokemonType
                  key={typeInfo.type.name}
                  type={typeInfo.type.name}
                />
              ))}
            <div className="bg-gray-200 text-gray-700 font-bold text-xs py-1 px-3 rounded shadow-box w-auto h-[36px] flex items-center justify-center">
              HT {pokemonData.height ? pokemonData.height / 10 : "N/A"} m
            </div>
            <div className="bg-gray-200 text-gray-700 font-bold text-xs py-1 px-3 rounded shadow-box w-auto h-[36px] flex items-center justify-center">
              WT {pokemonData.weight ? pokemonData.weight / 10 : "N/A"} kg
            </div>
          </div>
        </div>

        {/* Abilities Box */}
        <div className="bg-white shadow-box border-2 border-black rounded-lg p-3 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="text-gray-700 font-bold text-xs border-black">
              Abilities
            </div>
            {[
              ...new Set(
                pokemonData.abilities?.map(
                  (abilityInfo) => abilityInfo.ability.name
                ) || []
              ),
            ].map((abilityName) => (
              <div
                key={abilityName}
                className="bg-gray-200 text-gray-700 font-bold text-xs py-1 px-4 rounded shadow-box flex items-center justify-center border-black"
              >
                {abilityName
                  .toLowerCase()
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </div>
            ))}
          </div>
        </div>

        {/* Description Box */}
        <div className="bg-white text-black text-sm p-3 rounded-lg shadow-box text-center border-2 border-black">
          {pokemonSpeciesData?.flavor_text_entries
            ?.find(
              (entry: { language: { name: string } }) =>
                entry.language.name === "en"
            )
            ?.flavor_text.replace(/\f/g, " ") || "Description not available"}
        </div>
      </div>
    </div>
  );
}
