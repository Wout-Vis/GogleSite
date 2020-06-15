import React from "react";
import { Image } from "react-bootstrap";

export default function Founder() {
  return (
    <div>
      <div class="grid-container">
        <div class="founderQuote">
          <span id="span"></span>
        </div>
        <div class="founderText">
          <h2>Nicklas Ericksen</h2>
          <h3>Founder and Ceo</h3>
          <p>
            I was born on the 8th of January 1997 in Gothenburg, Sweden. When I
            was 5 years old my parents decided to give me a GameCube as a
            present. This first interaction resulted in my fascination with
            Nintendo products. During high school I really enjoyed my economics
            classes and with my own interest in everything technology Business &
            IT was the only logical option for me to study. When I was 18 I
            started studying business & IT at Chalmers. That’s where I first met
            my mentor and now good friend Jungkook Ahn. During my years at
            university Jungkook and I learned of our mutual interest in helping
            humanity via technology so that’s when we decided to combine our
            strengths (mine in business and his in Electrical and Mechanical
            engineering) and develop the next big step in 3D printing services.
            After my graduation, we started Gogle Print. This company became
            such a success that we decided to hire more people and started doing
            research on quantum computers since we believed that this would be
            the next big step in technology and that it could open lots of
            possibilities to help humanity. We also got our first inspiration
            for Mìmir.com and started working on that. The launch of Mìmir.com
            was a big step for us and that was the first time that we could see
            the impact of our work around the world. At the start of project
            Fafnir in 2026 I met Chad Bloomberg, a brilliant economist. After
            being together for a few years we married and adopted our two dogs
            Jimmy and Monkey.
          </p>
        </div>
        <div class="founderImg">
          <Image
            id="founderImg"
            src="https://www.ludoviccareme.com/files/image_211_image_fr.jpg"
          ></Image>
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
