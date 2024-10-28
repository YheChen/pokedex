import React from "react";

export default function PokeDex() {
  return (
    <div className="w-[750px] h-[400px] bg-red-600 rounded-lg shadow-lg flex relative p-4 -ml-6">
      {/* Info Header positioned at the top */}
      <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-red-800 via-red-600 to-red-800 text-white font-bold text-lg p-2 rounded-t-lg shadow-box text-left pl-4">
        INFO
      </div>

      {/* Left Section for Sprite */}
      <div className="flex-1 flex items-center justify-center">
        {/* Sprite Placeholder */}
        <div className="bg-gray-300 w-32 h-32 rounded shadow-box"></div>
      </div>

      {/* Right Section for Details, positioned slightly lower */}
      <div className="basis-2/3 flex flex-col space-y-4 pl-8 mt-4">
        {/* Pokedex Entry Box */}
        <div className="bg-white shadow-box border border-gray-300 rounded-lg p-3 space-y-2">
          <div className="bg-red-500 text-white p-2 rounded flex shadow-box">
            <span className="font-bold flex-1">000</span>
            <span className="font-bold flex-2 text-right">Name</span>
          </div>

          {/* Title */}
          <div className="bg-gray-200 text-center p-2 rounded shadow-box">
            <span className="text-gray-700">Title Pokémon</span>
          </div>

          {/* Types */}
          <div className="flex justify-center space-x-2">
            <button className="bg-gray-400 text-white font-bold py-1 px-3 rounded shadow-box">
              NORMAL
            </button>
            <button className="bg-gray-400 text-white font-bold py-1 px-3 rounded shadow-box">
              NORMAL
            </button>
          </div>
        </div>

        {/* Description Box */}
        <div className="bg-red-500 text-white p-3 rounded-lg shadow-box text-center">
          This is a newly discovered Pokémon. It is currently under
          investigation. No detailed information is available at this time.
        </div>
      </div>
    </div>
  );
}
