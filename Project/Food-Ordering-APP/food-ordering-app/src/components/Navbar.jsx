import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-5">
      <div>
        <h3 className="text-gray-600 text-xl">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className=" text-2xl font-bold">Food Ordering App</h1>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search here"
          className="p-3 border border-gray-400 rounded-lg outline-none text-sm w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
}
