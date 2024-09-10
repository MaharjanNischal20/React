import React from "react";

export default function Spinner() {
  return (
    <div
      className="spinner-border"
      role="status"
      style={{ width: "5rem", height: "5rem" }}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
