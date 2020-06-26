import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

import Escudero from "../../GFX/Escudero.JPG";
export default class ProfileInformation extends Component {
  render() {
    return (
      <div class="afterlogin">
        <div class="profileInfo">
          <Grid columns="two" divided>
            <Grid.Row>
              <Grid.Column textAlign="left">
                <h2>David Escudero</h2>
                <ul>
                  <h3>Personal details</h3>
                  <li> First name: David</li>
                  <li>Last name: Escudero</li>
                  <li>Full name: David Juan Cortez Daniel Maria Escudero</li>
                  <li>Date of birth: 15-04-1995</li>
                  <li>Age: 40</li>
                  <li>Sex: male</li>
                  <li>Status: married</li>
                  <li>Address: Elisabeth-Schuttingstraat 148</li>
                  <li>ZIP code: 0420 12</li>
                  <li>Phone Number: +31648465888</li>
                </ul>
                <ul>
                  <h3>Company Profile</h3>
                  <li>
                    Chief Scientist in Project Balder
                    <ul>
                      {" "}
                      <li>2030-2033</li>
                    </ul>
                  </li>
                  <li>
                    Researcher in Project Tyr
                    <ul>
                      {" "}
                      <li>2026-2033</li>
                    </ul>
                  </li>
                  <li>
                    Lab assistant
                    <ul>
                      {" "}
                      <li>2021-2026</li>
                    </ul>
                  </li>
                  <li>
                    Intern at Gogle Scientific Headquarters Netherlands
                    <ul>
                      {" "}
                      <li>2020-2021</li>
                    </ul>
                  </li>
                </ul>
              </Grid.Column>
              <Grid.Column>
                <Image circular size="large" src={Escudero} id="profileImg" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
