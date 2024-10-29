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
    const pokemonId = getPokemonIdFromUrl(currentStage.species.url);
    stages.push({
      name: currentStage.species.name,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
    });
    currentStage = currentStage.evolves_to[0]; // Move to the next stage
  }

  function getPokemonIdFromUrl(url: string) {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  }

  if (stages.length === 0) {
    return null; // Return null to avoid rendering anything if no stages exist
  }

  return (
    <div className="absolute bottom-4 left-4 w-1/3 flex justify-center items-center space-x-2 pr-2 bottom-12">
      {stages.map((stage, index) => (
        <React.Fragment key={index}>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-box">
            <Image src={stage.url} alt={stage.name} width={48} height={48} />
          </div>
          {/* Only add an arrow if it's not the last item */}
          {index < stages.length - 1 && (
            <span className="text-white text-xl">→</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default EvolutionChain;
