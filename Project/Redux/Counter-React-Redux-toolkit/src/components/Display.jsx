import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const counter = useSelector((store) => store.counter.counterVal);
  return (
    <div>
      <p className="lead mb-4">Counter Current Value:{counter}</p>
    </div>
  );
}
