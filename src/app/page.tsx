import React from "react";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import PokeDex from "../components/PokeDex";

export default function Home() {
  return (
    <div className="relative h-screen bg-sky-300">
      {/* Background */}
      <div className="absolute left-0 top-0 h-full w-full bg-sky-500 clip-shape-left"></div>
      <div className="absolute right-0 top-0 h-full w-full bg-sky-400 clip-shape-right"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full pt-5">
        <Header></Header>

        {/* Textbox with Buttons */}
        <div className="flex items-center space-x-3 mb-8">
          <Button text="Random"></Button>
          <SearchBar></SearchBar>
          <Button text="Search"></Button>
        </div>

        <PokeDex></PokeDex>
      </div>
    </div>
  );
}
