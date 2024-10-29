import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-3 px-4 w-24 rounded-lg hover:bg-blue-600"
    >
      {text}
    </button>
  );
}
