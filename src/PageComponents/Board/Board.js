import React from "react";
import Cards from "./Cards";
export default function Board() {
  return (
    <div style={{ margin: 40 }}>
      <h1 id="cardHeader">Board of Directors</h1>
      <Cards />
    </div>
  );
}
