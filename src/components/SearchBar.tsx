import React from "react";

export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="w-80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
