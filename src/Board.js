import React from "react";
import Cards from "./Cards";
export default function Board() {
  return (
    <div style={{ margin: 40 }}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
      </style>
      <h2 id="cardHeader">Our current board</h2>
      <Cards />
    </div>
  );
}
