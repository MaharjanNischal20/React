import React from "react";
import { FaStar } from "react-icons/fa";

export default function FoodCard() {
  return (
    <div className="flex flex-col w-[250px] bg-white p-5 rounded-lg ml-6 gap-2">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all ease-in-out duration-500"
      />
      <div className="font-bold flex justify-between">
        <h2>Onion Pizza</h2>
        <span>रु 180</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet
        assumenda sit hic odio qui temporibus, sunt nulla laudantium eos totam
        praesentium. Dignissimos nostrum, neque laboriosam aperiam velit
        consequatur ex?
      </p>
      <div className="flex justify-between">
        <span className="flex items-center ">
          <FaStar className="mr-1 text-yellow-500" /> 4.5
        </span>
        <button className="border rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm p-1">
          Add to cart
        </button>
      </div>
    </div>
  );
}
