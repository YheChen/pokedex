export default function PokeDex() {
  return (
    <div className="w-6/10 h-2/3 bg-red-600 rounded-lg shadow-lg flex items-center justify-center">
      {/* Main Pokedex Wrapper with Background Grid */}
      <div className="bg-white w-3/4 p-5 rounded-lg bg-grid shadow-lg">
        {/* Info Header */}
        <div className="bg-red-600 text-white font-bold text-lg p-2 rounded-t-lg shadow-box text-center">
          INFO
        </div>

        {/* Pokedex Entry Box */}
        <div className="bg-white shadow-box border border-gray-300 rounded-lg p-5 mt-2 space-y-4">
          <div className="bg-red-500 text-white p-2 rounded flex justify-between items-center shadow-box">
            <span className="font-bold">000</span>
            <span className="font-bold">Name</span>
          </div>

          {/* Title */}
          <div className="bg-gray-200 text-center p-2 rounded shadow-box">
            <span className="text-gray-700">Title Pokémon</span>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-300 w-24 h-24 mx-auto rounded shadow-box"></div>

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
        <div className="bg-red-500 text-white p-3 mt-4 rounded-lg shadow-box text-center">
          This is a newly discovered Pokémon. It is currently under
          investigation. No detailed information is available at this time.
        </div>
      </div>
    </div>
  );
}
