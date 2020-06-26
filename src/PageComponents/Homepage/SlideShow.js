import React from "react";

import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import slideQuantum from "../../GFX/quantum2.svg";
import slideTeam from "../../GFX/theTeam.svg";
import slideProducts from "../../GFX/products2.svg";
import slideWelcome from "../../GFX/welcome.svg";
export default function SlideShow() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: 400 }}
            id="firstSlider"
            className="d-block w-100"
            src={slideWelcome}
            alt="First slide"
            draggable="false"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 400 }}
            id="firstSlider"
            className="d-block w-100"
            src={slideQuantum}
            alt="First slide"
            draggable="false"
          />
          <Carousel.Caption>
            <Button size="lg" as={Link} to="/quantum">
              Learn more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 400 }}
            id="seccondSlider"
            className="d-block w-100"
            src={slideTeam}
            alt="Third slide"
            draggable="false"
          />

          <Carousel.Caption>
            <Button size="lg" as={Link} to="/board">
              Our Board
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="thirdSlider"
            style={{ height: 400 }}
            className="d-block w-100"
            src={slideProducts}
            alt="Third slide"
            draggable="false"
          />

          <Carousel.Caption>
            <Button size="lg" as={Link} to="/products">
              Branches
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
