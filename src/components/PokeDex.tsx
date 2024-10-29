import React from "react";
import Image from "next/image";

export default function PokeDex({ pokemonData }) {
  return (
    <div className="w-[750px] h-[400px] bg-red-600 rounded-lg shadow-lg flex relative p-4 -ml-6">
      {/* Info Header positioned at the top */}
      <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-red-800 via-red-600 to-red-800 text-white font-bold text-lg p-2 rounded-t-lg shadow-box text-left pl-4">
        ▼ INFO
      </div>

      {/* Left Section for Sprite */}
      <div className="flex-1 flex items-center justify-center">
        {/* Sprite Placeholder */}
        <div className="bg-gray-300 w-32 h-32 rounded shadow-box"></div>
      </div>

      {/* Right Section for Details, positioned slightly lower */}
      <div className="basis-2/3 flex flex-col space-y-2 pl-8 mt-4">
        {" "}
        {/* Changed space-y-4 to space-y-2 */}
        {/* Pokedex Entry Box */}
        <div className="bg-white shadow-box border-2 border-black rounded-lg p-3 space-y-2 mt-8">
          <div className="bg-red-500 text-white p-2 rounded flex shadow-box items-center">
            {/* Pokémon ID positioned slightly to the right */}
            <span className="font-bold ml-9">000</span>

            {/* Pokéball Icon centered */}
            <Image
              src="/images/pokeball.png"
              alt="Pokéball"
              width={24}
              height={24}
              className="mx-2"
            />

            {/* Pokémon name centered */}
            <span className="font-bold pl-12">Fletchinder</span>
          </div>

          {/* Title */}
          <div className="bg-gray-200 text-center p-2 rounded shadow-box">
            <span className="text-gray-700">Title Pokémon</span>
          </div>

          {/* Types */}
          <div className="flex items-center space-x-2">
            <div className="bg-gray-400 text-white font-bold py-1 px-3 rounded shadow-box w-auto h-[36px] flex items-center justify-center">
              NORMAL
            </div>
            <div className="bg-gray-400 text-white font-bold py-1 px-3 rounded shadow-box w-auto h-[36px] flex items-center justify-center">
              NORMAL
            </div>
            {/* Height and Weight */}
            <div className="bg-gray-200 text-gray-700 font-bold text-xs py-1 px-3 rounded shadow-box w-auto h-[36px] flex items-center justify-center">
              HT 65'07"
            </div>
            <div className="bg-gray-200 text-gray-700 font-bold text-xs py-1 px-3 rounded shadow-box w-auto h-[36px] flex items-center justify-center">
              WT 2204.4 lbs
            </div>
          </div>
        </div>
        {/* Abilities Box */}
        <div className="bg-white shadow-box border-2 border-black rounded-lg p-3 space-y-2">
          <div className="flex items-center space-x-2">
            {/* Label for Abilities */}
            <div className="text-gray-700 font-bold text-xs border-black">
              Abilities
            </div>

            {/* Two spots for abilities */}
            <div className="bg-gray-200 text-gray-700 font-bold text-xs py-1 px-4 rounded shadow-box flex items-center justify-center border-black">
              Strong Jaw
            </div>
            <div className="bg-gray-200 text-gray-700 font-bold text-xs py-1 px-4 rounded shadow-box flex items-center justify-center border-black">
              Stakeout
            </div>
            <div className="bg-gray-400 text-white font-bold text-xs py-1 px-4 rounded shadow-box flex items-center justify-center border-black">
              Adaptability
            </div>
          </div>
        </div>
        {/* Description Box */}
        <div className="bg-white text-black p-3 rounded-lg shadow-box text-center border-2 border-black">
          "Forests where Shiinotic live are treacherous to enter at night.
          People confused by its strange lights can never find their way home
          again."
        </div>
      </div>
    </div>
  );
}
