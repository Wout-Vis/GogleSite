import React from "react";
import { Card, CardDeck, Accordion, Button } from "react-bootstrap";

import Ahn from "./Directors/Ahn.jpeg";
import Gonzales from "./Directors/Gonzales.jpeg";
import Ramos from "./Directors/Ramos.png";

import Escudero from "./Directors/Escudero.JPG";
import Johnston from "./Directors/Johnston.JPG";
import Dijk from "./Directors/Dijk.JPG";

import Ericksen from "./Directors/Ericksen.JPG";
import Taylor from "./Directors/Taylor.JPG";
import Edward from "./Directors/Edward.JPG";

import Westwood from "./Directors/Westwood.JPG";
import Krul from "./Directors/Krul.JPG";
import Lannister from "./Directors/Lannister.JPG";

import Mirova from "./Directors/Mirova.jpeg";
import Keita from "./Directors/Keita.JPG";

export default function Cards() {
  return (
    <div>
      <Accordion>
        <CardDeck id="cards">
          <Card>
            <Card.Img variant="top" src={Ahn} />
            <Card.Body>
              <Card.Title>Jungkook Ahn</Card.Title>
              <Card.Text>COO/Co-founder </Card.Text>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Read More
              </Accordion.Toggle>
            </Card.Body>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Img variant="top" src={Lannister} />
            <Card.Body>
              <Card.Title>Ji-Soo Lannister</Card.Title>
              <Card.Text>Senior Managment Advisor</Card.Text>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Read More
              </Accordion.Toggle>
            </Card.Body>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Img variant="top" src={Ramos} />
            <Card.Body>
              <Card.Title>Juan Fuentes Ramos</Card.Title>
              <Card.Text>Chairman of Gogle Stocks branch</Card.Text>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Read More
              </Accordion.Toggle>
            </Card.Body>
            <Accordion.Collapse eventKey="2 ">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </CardDeck>

        <CardDeck id="cards">
          <Card>
            <Card.Img variant="top" src={Escudero} />
            <Card.Body>
              <Card.Title>David Escudero</Card.Title>
              <Card.Text>
                Senior Vice President of Gogle Science Branch
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Johnston} />
            <Card.Body>
              <Card.Title>Chuck Johnston</Card.Title>
              <Card.Text>CFO</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Dijk} />
            <Card.Body>
              <Card.Title>Rafael van Dijk</Card.Title>
              <Card.Text>Chairman of Gogle Science branch</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck id="cards">
          <Card>
            <Card.Img variant="top" src={Ericksen} />
            <Card.Body>
              <Card.Title>Nicklas Ericksen</Card.Title>
              <Card.Text>CEO/Founder</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Keita} />
            <Card.Body>
              <Card.Title>Bassira Keita</Card.Title>
              <Card.Text>Public Affairs Officer</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={Edward} />
            <Card.Body>
              <Card.Title>Steve Edward</Card.Title>
              <Card.Text>Chairman of Gogle Management branch</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck id="cards">
          <Card>
            <Card.Img variant="top" src={Westwood} />
            <Card.Body>
              <Card.Title>June Westwood</Card.Title>
              <Card.Text>Senior Vice President of Gogle Green branch</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Krul} />
            <Card.Body>
              <Card.Title>Cristina Krul</Card.Title>
              <Card.Text>Senior Technological Advisor</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Gonzales} />
            <Card.Body>
              <Card.Title>Ernesto Gonzales</Card.Title>
              <Card.Text>CIO</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck id="cards">
          <Card>
            <Card.Img variant="top" src={Mirova} />
            <Card.Body>
              <Card.Title>Aleksandra Mirova</Card.Title>
              <Card.Text>CSO</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Taylor} />
            <Card.Body>
              <Card.Title>Matthew Taylor</Card.Title>
              <Card.Text>Chairman of Gogle Green branch</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Accordion>
    </div>
  );
}
