import React from "react";
import Image from "next/image";

interface EvolutionChainProps {
  evolutionChain: any;
}

const EvolutionChain: React.FC<EvolutionChainProps> = ({ evolutionChain }) => {
  const stages = [];
  let currentStage = evolutionChain?.chain;

  // Traverse the evolution chain to gather species names and sprite URLs
  while (currentStage && currentStage.species) {
    stages.push({
      name: currentStage.species.name,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(
        currentStage.species.url
      )}.png`,
    });
    currentStage = currentStage.evolves_to[0]; // Move to the next stage
  }

  // Function to extract Pokémon ID from the species URL
  function getPokemonIdFromUrl(url: string) {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  }

  // Only render if there are evolution stages available
  if (stages.length === 0) {
    return null; // Return null to avoid rendering anything if no stages exist
  }

  return (
    <div className="flex items-center space-x-2 absolute bottom-4 left-4">
      {stages.map((stage, index) => (
        <div
          key={index}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-box"
        >
          <Image src={stage.url} alt={stage.name} width={48} height={48} />
        </div>
      ))}
    </div>
  );
};

export default EvolutionChain;
