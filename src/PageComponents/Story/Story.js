import React from "react";
import { Image } from "react-bootstrap";

import Timeline from "./timelineV2Asset.png";
export default function Story() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
      </style>
      <div class="lt-grid-container">
        <div class="lt-imgPlace">
          <Image id="timeLine" src={Timeline}></Image>
        </div>
        <div class="lt-txtPlace">
          <h1 id="gogleStory">The full story of Gogle</h1>
        </div>
      </div>
    </div>
  );
}
