import React, { Component } from "react";
import { Grid, Image, Message, Embed } from "semantic-ui-react";
import Schedule from "./scheduleAndStuff/schedule_withtext.svg";

export default class Profile extends Component {
  render() {
    return (
      <div class="afterlogin">
        <div class="welcome">
          <h2>Welcome back David Escudero!</h2>
        </div>
        <Image src={Schedule} centered size="massive" />
        <div class="companyNews">
          <h2>Company News</h2>
          <Message>
            <Message.Header>10/5/3035</Message.Header>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <p>
                    We are proud to announce Project: Odin to our employees and
                    investors. Gogle spearheads a new generation in Simulation
                    Technology with the Odin Control Panel. Away from the age of
                    speculation. Towards an age of conformation.
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      class="embed-responsive-item"
                      src="https://drive.google.com/file/d/10k7eTDl4_ZWgvrj-f86IYWiAjEW9g-_t/preview"
                      allowfullscreen
                    ></iframe>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Message>
          <Message>
            <Message.Header>20/02/2035</Message.Header>
            <Message.Content>
              <p>
                The time has come to expand our business once again with our new
                branch: Gogle Stocks. Helping companies across the world in
                their investments providing security and conformation for all
                parties involved.{" "}
              </p>
            </Message.Content>
          </Message>
          <Message>
            <Message.Header>23/11/2034</Message.Header>
            <Message.Content>
              <p>
                We are proud to announce that the Gogle Green branch has helped
                in achieving a great milestone for the Amazon Forestv. For the
                first time since 1978 the Amazon has grown more trees than trees
                were cut down, a great feat! Projections show that the Amazon
                may be at 70% of the original size in 10 years, compared to the
                45% now.
              </p>
            </Message.Content>
          </Message>
        </div>
      </div>
    );
  }
}
