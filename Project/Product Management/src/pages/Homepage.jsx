import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="flex space-x-5 mt-5 ml-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
