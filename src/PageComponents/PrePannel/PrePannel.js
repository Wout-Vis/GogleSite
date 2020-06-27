import React, { Component } from "react";

export default class PrePannel extends Component {
  render() {
    return (
      <div class="projectDiv">
        <h2>Project: INSERT NAME</h2>
        <div>
          <p>
            Welcome to our next big product: Project “product name”. This
            project aims to provide a revolutionary new service to governments
            and organizations around the world: “Quantum Crowd Steering”. With
            our innovations in simulation technology we have been able to create
            a simulated version of Earth. In this simulation we can control
            certain aspects such as news, articles, advertising, etc to try and
            steer crowds in a certain direction.
          </p>
          <h3>Examples</h3>
          <ul>
            <li>
              The service can be used for increasing brand recognition and
              increasing product sales by trying out different forms of
              advertising in the simulated world first. Sort of a quantum
              boosted version of targeted advertising.
            </li>
            <li>
              The service could be used to alter the approval rating of a
              politician by providing the simulated people with certain articles
              and news broadcasts.
            </li>
            <li>
              The service could be used by companies to see what certain
              high-stakes decisions can bring them in the future. This could be
              investments, lay-offs, timed product launches, etc.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
