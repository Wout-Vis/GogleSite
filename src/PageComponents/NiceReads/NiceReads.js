import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

import Manifesto from "./Books/manifesto.jpg";
import Cabin from "./Books/cabin.jpg";
import Heart from "./Books/heart.jpg";
import Travels from "./Books/travels.jpg";
import Species from "./Books/species.jpg";
import Adventrues from "./Books/advantures.jpg";
import Cancer from "./Books/cancer.jpg";
import Steen from "./Books/steen.jpg";
import Mice from "./Books/mice.jpg";
import Flies from "./Books/flies.png";
import Steve from "./Books/steve.jpg";
import Destiny from "./Books/destiny.jpg";
import O1984 from "./Books/O1984.jpg";
import Ranger from "./Books/ranger.jpg";
import World from "./Books/world.jpg";

export default class NiceReads extends Component {
  render() {
    return (
      <div class="afterlogin">
        <div class="niceReads">
          <h2>Nice Reads</h2>
          <Grid columns="three" divided>
            <Grid.Row>
              <Grid.Column>
                <Image size="small" centered="true" src={Manifesto} />
                <h3>
                  Manifesto of the Communist Party by Karl Marx and Friedrich
                  Engels
                </h3>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" centered="true" src={Cabin} />
                <h3>Uncle Tom’s Cabin by Harriet Beecher Stowe</h3>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" centered="true" src={Heart} />
                <h3>Heart of Darkness by Joseph Conrad</h3>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Image size="small" centered="true" src={Travels} />
                <h3>The Travels by Marco Polo</h3>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" centered="true" src={Species} />
                <h3>On the origin of species by Charles Darwin</h3>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" centered="true" src={Adventrues} />
                <h3>The adventures of Huckleberry Finn by Mark Twain</h3>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Image size="small" centered="true" src={Cancer} />
                <h3>Tropic of Cancer by Henry Miller</h3>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" centered="true" src={Steen} />
                <h3>Op zoek naar de onderste steen by Maarten Bollen</h3>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" centered="true" src={Mice} />
                <h3>Of Mice and Men by John Steinbeck</h3>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Image size="small" centered="true" src={Flies} />
                <h3>Lord of the Flies by William Golding</h3>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" centered="true" src={Steve} />
                <h3>Biography of Steve Jobs by Walter Isaacson</h3>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" centered="true" src={Destiny} />
                <h3>Churchill walking with destiny by Andrew Roberts</h3>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Image size="small" centered="true" src={O1984} />
                <h3>1984 by George Orwell</h3>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" centered="true" src={Ranger} />
                <h3>The ranger’s apprentice series by John Flanagan</h3>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" centered="true" src={World} />
                <h3>Around the world in 80 days by Jules Verne</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
