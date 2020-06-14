import React from "react";
import { Image } from "react-bootstrap";

import ScrollContainer from "react-indiana-drag-scroll";

import Timeline from "./timelineV2Asset.png";
export default function Story() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
      </style>
      <div class="lt-grid-container">
        <div class="lt-imgPlace">
          <ScrollContainer className="scroll-container">
            <Image id="timeLine" src={Timeline}></Image>
          </ScrollContainer>
        </div>
        <div class="lt-txtPlace">
          <h1 id="gogleStory">The full story of Gogle</h1>
        </div>
      </div>
    </div>
  );
}
