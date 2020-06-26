import React from "react";

import quantum from "../../GFX/quantumBig.svg";

export default function Quantum() {
  return (
    <div>
      <div>
        <img alt="quantum PC" src={quantum} fluid />
      </div>
      <div class="container">
        <div className="row">
          <div className="col" id="quantumTitle">
            <h1>What is quantum computing?</h1>
          </div>
        </div>
        <div className="row" style={{ padding: 20 }}>
          <div className="col">
            <p>
              Placholder text <br></br>Quantum computing is the use of
              quantum-mechanical phenomena such as superposition and
              entanglement to perform computation. Computers that perform
              quantum computations are known as quantum computers.[1]:I-5
              Quantum computers are believed to be able to solve certain
              computational problems, such as integer factorization (which
              underlies RSA encryption), substantially faster than classical
              computers. The study of quantum computing is a subfield of quantum
              information science.
            </p>
          </div>

          <div className="col">
            <img
              alt="quantum computer"
              src="https://live.staticflickr.com/4788/40786969122_9a55880199_b.jpg"
              fluid
            />
          </div>
        </div>
      </div>
    </div>
  );
}
