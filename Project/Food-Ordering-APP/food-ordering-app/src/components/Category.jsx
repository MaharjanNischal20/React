import React from "react";

export default function Category() {
  return (
    <div className="ml-6 mt-10">
      <h2 className="font-semibold text-xl">Find the best food</h2>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button className="bg-gray-200 hover:bg-green-700 hover:text-white font-bold py-2 rounded-lg px-3">
          All
        </button>
        <button className="bg-gray-200 hover:bg-green-700 hover:text-white font-bold py-2 rounded-lg px-3">
          Lunch
        </button>
        <button className="bg-gray-200 hover:bg-green-700 hover:text-white font-bold py-2 rounded-lg px-3">
          Breakfast
        </button>
        <button className="bg-gray-200 hover:bg-green-700 hover:text-white font-bold py-2 rounded-lg px-3">
          Dinner
        </button>
        <button className="bg-gray-200 hover:bg-green-700 hover:text-white font-bold py-2 rounded-lg px-3">
          Snacks
        </button>
      </div>
    </div>
  );
}
