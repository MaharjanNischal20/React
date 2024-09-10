import React from "react";

export default function WelcomeMessage({ onGetPostClick }) {
  return (
    <center className="welcome-message">
      <p>There are no any post right now!!.</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Primary
      </button>
    </center>
  );
}
