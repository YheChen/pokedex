"use client";

import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import PokeDex from "../components/PokeDex";
import EvolutionChain from "@/components/EvolutionChain";

export default function Home() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
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
      setPokemonData(null);
      setPokemonSpeciesData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRandomSearch = async () => {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      const response1 = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${randomId}`
      );
      setPokemonData(response.data);
      setPokemonSpeciesData(response1.data);
    } catch (error) {
      console.error("Pokémon not found");
      setPokemonData(null);
      setPokemonSpeciesData(null);
    } finally {
      setLoading(false);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      handleSearch();
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
          <Button text="Random" onClick={handleRandomSearch} />
          <SearchBar
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button text="Search" onClick={handleSearch} />
        </div>
        {loading ? (
          <p className="text-white font-bold text-xl">Loading...</p>
        ) : (
          <PokeDex
            pokemonData={pokemonData}
            pokemonSpeciesData={pokemonSpeciesData}
            evolutionChainData={EvolutionChain}
          />
        )}
      </div>
    </div>
  );
}
