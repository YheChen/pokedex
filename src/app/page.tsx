"use client";

import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import PokeDex from "../components/PokeDex";

export default function Home() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async () => {
    console.log("clicked");
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`
      );
      const response1 = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${inputValue.toLowerCase()}`
      );
      setPokemonData(response.data);
      setPokemonSpeciesData(response1.data);
    } catch (error) {
      console.error("Pokémon not found");
      setPokemonData(null); // Clear data if not found
      setPokemonSpeciesData(null);
    }
  };

  return (
    <div className="relative h-screen bg-sky-300">
      {/* Background */}
      <div className="absolute left-0 top-0 h-full w-full bg-sky-500 clip-shape-left"></div>
      <div className="absolute right-0 top-0 h-full w-full bg-sky-400 clip-shape-right"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full pt-5">
        <Header />
        {/* Textbox with Buttons */}
        <div className="flex items-center space-x-3 mb-8">
          <Button
            text="Random"
            onClick={() => console.log("Random button clicked")}
          />
          <SearchBar
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <Button text="Search" onClick={handleSearch} />
        </div>
        <PokeDex
          pokemonData={pokemonData}
          pokemonSpeciesData={pokemonSpeciesData}
        />
      </div>
    </div>
  );
}
