import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import Progress from "../../Progress";

export default class PrePannelComment extends Component {
  render() {
    return (
      <div class="afterlogin">
        <div class="projectDiv">
          <h2>Project: ODIN</h2>

          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <div>
                  <p>
                    Welcome to our next big product: Project “ODIN”. This
                    project aims to provide a revolutionary new service to
                    governments and organizations around the world: “Quantum
                    Crowd Steering”. With our innovations in simulation
                    technology we have been able to create a simulated version
                    of Earth. In this simulation we can control certain aspects
                    such as news, articles, advertising, etc to try and steer
                    crowds in a certain direction.
                  </p>
                  <h3>Examples</h3>
                  <ul>
                    <li>
                      The service can be used for increasing brand recognition
                      and increasing product sales by trying out different forms
                      of advertising in the simulated world first. Sort of a
                      quantum boosted version of targeted advertising.
                    </li>
                    <li>
                      The service could be used to alter the approval rating of
                      a politician by providing the simulated people with
                      certain articles and news broadcasts.
                    </li>
                    <li>
                      The service could be used by companies to see what certain
                      high-stakes decisions can bring them in the future. This
                      could be investments, lay-offs, timed product launches,
                      etc.
                    </li>
                  </ul>
                  <Button onClick={ () => Progress.updateProgress("4")}>
                    To Project Odin
                  </Button>
                </div>
              </Grid.Column>
              <Grid.Column>
                <h3>Discussion</h3>
                <h4>All comments are posted by “anonymous”.</h4>
                <ul>
                  <li>
                    Isn’t this inherently wrong? Even if it is a simulation we
                    are still infringing on people's autonomy both in and
                    outside of Project Odin.
                  </li>
                  <li>
                    Amazing. Our last century has been marked by many
                    achievements: computers, the personal computer, the
                    internet, smartphones and quantum computing. Project Odin
                    feels like the next thing on that list.
                  </li>
                  <li>
                    I don’t think we should morally support this, it feels wrong
                    to use.
                  </li>
                  <li>
                    The panel looks great and works great. The options are still
                    rather limited, but I believe that in time this will be the
                    next big step for humanity and welfare.
                  </li>
                  <li>
                    Why are we making this? Even though it’s a simulation people
                    are still people.
                  </li>
                  <li>
                    With this simulation we can mark a new era for targeted
                    advertisement, say goodbye to cookies!
                  </li>
                  <li>
                    A new leap in political and market manipulation. It feels
                    wrong to say but people usually don’t know what’s best for
                    them.
                  </li>
                  <li>
                    My company was one of the test companies for Project Odin.
                    Thanks to this product our sales have gone up by 200%.
                  </li>
                  <li>
                    I wonder how much data collection was necessary to create
                    this simulation…
                  </li>
                </ul>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
