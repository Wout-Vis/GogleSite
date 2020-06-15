import React from "react";
import SlideShow from "./SlideShow";

import { Image } from "react-bootstrap";
export default function Homepage() {
  return (
    <div>
      <SlideShow />
      <div className="row" style={{ padding: 40 }}>
        <div id="homepageImgBox">
          <img
            alt="Google Home"
            src="https://i.pinimg.com/originals/e7/c3/fe/e7c3fe22594e57b4af69f5ab42644ac6.jpg"
            id="homepageImg"
          />
        </div>
        <div id="founderQuoteBox">
          <p id="founderQuote">
            “From day one our goal at Gogle is to contribute to the betterment
            of humanity. We believe that our advanced technologies provide a
            revolutionary new way to manage finance, government, science,
            environment and more. Let’s all work together on a better tomorrow.”
          </p>
          <p id="founderCitation">
            - Nicklas Ericksen, Founder & CEO
          </p>
        </div>
        <div id="blogBox" >
          <p>
            To continue the “Meet a director” event, we would like to introduce you 
            to this month's member: David Escudero. We know David as our Senior Vice 
            President of the Gogle Science branch but he is much more than that! For 
            example, David is what is known as a “trekkie”, a Star Trek fan. He is 
            known around the office for his Star Trek mugs and his favourite character 
            is Spock! David also has a dog named Chewie, quite a name for a Star Trek fan...
          </p>
        </div>
      </div>
    </div>
  );
}
