import React from "react";
import SlideShow from "./SlideShow";

import { Carousel, Image } from "react-bootstrap";
export default function Homepage() {
  return (
    <div>
      <SlideShow />
      <div className="row" style={{ padding: 40 }}>
        <div className="col-md-8">
          <Image
            alt="Bootstrap Image Preview"
            src="https://i.pinimg.com/originals/e7/c3/fe/e7c3fe22594e57b4af69f5ab42644ac6.jpg"
            fluid
          />
        </div>
        <div className="col-md-4">
          <p>
            Lorem ipsum dolor sit amet,{" "}
            <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien
            sapien. Curabitur in metus urna. In hac habitasse platea dictumst.
            Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh,
            lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam
            ut cursus.{" "}
            <em>
              Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id
              commodo imperdiet, metus nunc consequat lectus, id bibendum diam
              velit et dui.
            </em>{" "}
            Proin massa magna, vulputate nec bibendum nec, posuere nec lacus.{" "}
            <small>
              Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla
              euismod ultrices massa, et feugiat ipsum consequat eu.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
