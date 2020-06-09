import React from "react";

import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SlideShow() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: 400 }}
            id="firstSlider"
            className="d-block w-100"
            src="https://singularityhub.com/wp-content/uploads/2019/03/IBM-quantum-machine-learning-nature-art-square-Computing-1068x601.jpg"
            alt="First slide"
            draggable="false"
          />
          <Carousel.Caption>
            <h3>Gogle</h3>
            <p>Innovating since 2015</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 400 }}
            id="seccondSlider"
            className="d-block w-100"
            src="https://cls.ucl.ac.uk/wp-content/uploads/nf_image/Children-future-opea2aeco8bf60clt46wy8vs.jpg"
            alt="Third slide"
            draggable="false"
          />

          <Carousel.Caption>
            <Button size="lg" as={Link} to="/founder">
              Our vision
            </Button>
            <p>Take a look at our vision</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="thirdSlider"
            style={{ height: 400 }}
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/stock-market-forex-trading-graph-graphic-concept_73426-66.jpg"
            alt="Third slide"
            draggable="false"
          />

          <Carousel.Caption>
            <Button size="lg" as={Link} to="/products">
              Gogle Stocks
            </Button>
            <p>now introducing Gogle stocks</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
