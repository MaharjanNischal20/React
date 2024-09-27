import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import FoodItems from "../components/FoodItems";

export default function Homepage() {
  return (
    <>
      <Navbar></Navbar>
      <Category></Category>
      <FoodItems></FoodItems>
    </>
  );
}
