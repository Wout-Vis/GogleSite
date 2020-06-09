import React from "react";
import { Image } from "react-bootstrap";

export default function Founder() {
  return (
    <div>
      <div class="grid-container">
        <div class="founderText">
          <h2>Nicklas Ericksen</h2>
          <h3>Founder and Ceo</h3>
          <p>
            Lorem ipsum dolor sit amet,{" "}
            <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien
            sapien. Curabitur in metus urna. In hac habitasse platea dictumst.
            Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh,
            lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam
            ut cursus.{" "}
          </p>
        </div>
        <div class="founderImg">
          <Image
            id="founderImg"
            src="https://www.ludoviccareme.com/files/image_211_image_fr.jpg"
          ></Image>
        </div>
      </div>
    </div>
  );
}
