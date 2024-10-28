import React from "react";

export default function Button({ text }: { text: string }) {
  return (
    <button className="bg-blue-500 text-white py-3 px-4 w-24 rounded-lg hover:bg-blue-600">
      {text}
    </button>
  );
}
