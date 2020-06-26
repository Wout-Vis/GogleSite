import React from "react";
import SlideShow from "./SlideShow";

import { Link } from "react-router-dom";
import { Image, Card, Button } from "react-bootstrap";
import pictureOne from "../../GFX/combinedPicture.png";

export default function Homepage() {
  return (
    <div>
      <SlideShow />
      <div className="row" style={{ padding: 40 }}>
        <div className="col" id="quoteBox">
          <p id="quote">
            “Our goal at Gogle is to contribute to the{" "}
            <span class="blueText">betterment of humanity</span>. Our advanced
            technologies provide<span class="redText"> revolutionary</span> new
            ways to manage and optimize. Let’s all work
            <span class="yellowText"> together</span> on a better{" "}
            <span class="greenText">tomorrow</span>.”
          </p>
        </div>
      </div>
      <div className="row" style={{ padding: 40 }}>
        <div className="col-md-6">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://drive.google.com/file/d/10k7eTDl4_ZWgvrj-f86IYWiAjEW9g-_t/preview"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <p id="textPic1">
            “From day one our goal at Gogle is to contribute to the betterment
            of humanity. We believe that our advanced technologies provide a{" "}
            revolutionary new way to manage finance, government, science,
            environment and more. Let’s all work together on a better tomorrow.”
          </p>
        </div>
      </div>
      <div className="row" style={{ padding: 40 }}>
        <div className="col-md-6">
          <p id="textPic1">
            “From day one our goal at Gogle is to contribute to the betterment
            of <span class="blueText">humanity</span>. We believe that our
            advanced technologies provide a{" "}
            <span class="redText">revolutionary</span> new way to manage
            finance, government, science, environment and more. Let’s all work
            <span class="yellowText"> together</span> on a better{" "}
            <span class="greenText">tomorrow</span>.”
          </p>
        </div>
        <div className="col-md-6">
          <Image
            alt="Bootstrap Image Preview"
            id="homeImg"
            src={pictureOne}
            fluid
          />
        </div>
      </div>
      <div id="meetTheBoard">
        <Card>
          <Card.Header>Meet a director</Card.Header>
          <Card.Body>
            <Card.Title>Davis Escudero</Card.Title>
            <Card.Text>
              To continue the “Meet a director” event, we would like to
              introduce you to this month's member: David Escudero. We know
              David as our Senior Vice President of the Gogle Science branch but
              he is much more than that! For example, David is what is known as
              a “trekkie”, a Star Trek fan. He is known around the office for
              his Star Trek mugs and his favourite character is Spock! David
              also has a dog named Chewie, quite a name for a Star Trek fan...
            </Card.Text>
            <Button variant="primary" as={Link} to="/board">
              More about the Board
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
