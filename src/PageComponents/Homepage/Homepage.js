import React from "react";
import SlideShow from "./SlideShow";

import { Image } from "react-bootstrap";
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
            “From day one our goal at Gogle is to contribute to the betterment
            of humanity. We believe that our advanced technologies provide a
            revolutionary new way to manage finance, government, science,
            environment and more. Let’s all work together on a better tomorrow.”
          </p>
        </div>
      </div>
    </div>
  );
}
