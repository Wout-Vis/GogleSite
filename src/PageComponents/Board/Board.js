import React from "react";
import Cards from "./Cards";
export default function Board() {
  return (
    <div style={{ margin: 40 }}>
      <h2 id="cardHeader">Our current board</h2>
      <Cards />
    </div>
  );
}
