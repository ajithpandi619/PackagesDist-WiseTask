import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TheniImg from "../assets/Homepage/Home/Theni.jpeg";
import Theni1 from "../assets/Homepage/Home/theni1.(1).jpeg";
import Theni2 from "../assets/Homepage/Home/theni1 (2).jpeg";
import Theni3 from "../assets/Homepage/Home/theni1.(3).jpeg";
import Theni4 from "../assets/Homepage/Home/theni1.(4).jpeg";

function Theni() {
  return (
    <Container className="mt-5 " id="theni">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>09.Theni</h3>
          <img src={TheniImg} className="ch_img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder">"A little hamlet in Tamil Nadu"</h6>
          <div className="text-container text-container1">
            <p className="text-indent text-secondary">
              Theni Tourism Dotted by luscious patches of greenery and beautiful
              waterfalls, Theni is a little hamlet on the Western Ghats. The
              topography of Theni mainly consists of hills and ranges. It has
              plenty of rivers and dams and is an abode to 27 forests hence
              filled with unparalleled greenery.
            </p>
            <p className="text-indent text-secondary">
              There temples like Kamatchi Amman Temple, Vellappar Temple, and
              Balasubramanya Temple which are brimming with devotees from all
              around the country throughout the year. The vibrant local markets
              of Theni are shoppers' paradise. The local handloom products and
              agricultural products are the best buys at these markets. The
              aroma filled tea estates in Theni are a paradise. The Kolukkamalai
              Tea estate is often deemed to be the world's highest organic tea
              estate. The Suruli Falls and the Kumbakarai Falls are the crown
              jewels of Theni.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Theni</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Theni1} />
              <Card.Body>
                <Card.Title>Pagoda Point</Card.Title>
                <Card.Text>
                  Located in the eastern part of the Yercaud Hills, Pagoda point
                  is a beautiful viewpoint where one is treated...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Theni2} />
              <Card.Body>
                <Card.Title>Botanical Garden</Card.Title>
                <Card.Text>
                  Any tourist who is interested in gods gift to this planet, the
                  wondrous flora, and in knowing about various...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Theni3} />
              <Card.Body>
                <Card.Title>Emerald Lake</Card.Title>
                <Card.Text>
                  The most alluring aspect of Yercaud is its big yet natural
                  lake very popularly known as the Emerald Lake...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Theni4} />
              <Card.Body>
                <Card.Title> Lady,s Seat</Card.Title>
                <Card.Text>
                  Lady's Seat is a viewpoint that overlooks the winding ghat
                  road and offers a spectacular view of Mettur Dam...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Theni;
