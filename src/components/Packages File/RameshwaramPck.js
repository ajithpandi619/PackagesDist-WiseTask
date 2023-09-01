import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Badge, Row } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-bootstrap/Carousel";
import ootyImg from "../../assets/Packages Imgs/ootyImg.jpg";
import kanyaImg from "../../assets/Packages Imgs/kanyaImg.jpg";
import kumbakonamImg from "../../assets/Packages Imgs/KumbakonamImg.jpg";
import theniImg from "../../assets/Packages Imgs/theniImg.jpg";
import yercaudImg from "../../assets/Packages Imgs/yercaudImg.jpg";
import hogenakkalImg from "../../assets/Packages Imgs/HogenakkalImg.jpg";
import rameshwaramImg from "../../assets/Packages Imgs/rameshwaramImg.jpg";
import kodaikanalImg from "../../assets/Packages Imgs/kodaiImg.avif";
import chennaiImg from "../../assets/Packages Imgs/chennaiImg.webp";

import {
  faHotel,
  faBowlFood,
  faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";

function RameshwaramPck() {
  return (
    <div className="container mt-5">
      <div>
        <h2>02. Rameshwaram To All District</h2>
      </div>
      <Carousel>
        <Carousel.Item>
          <Row>
            {/* 1st row */}
            <Col style={{ margin: "30px" }} lg={3}>
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={ootyImg}
                  alt="Rameshwaram  to Ooty"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">Rameshwaram to Ooty</span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className=" fw-bold ">Duration:</span> 9 hr 31 min
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">KMs:</span> 452.9 km
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 15000
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="rating">
                      <span className="text-muted">Rating: </span>
                      <Badge variant="success">
                        <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
                      </Badge>
                    </div>
                    <small className="text-muted">Reviews (45)</small>
                  </div>

                  <div
                    style={{ marginTop: "20px" }}
                    className="  w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* 2nd card */}
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={rameshwaramImg}
                  alt="Rameshwaram  to Madurai"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Madurai
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className=" fw-bold ">Duration:</span> 2 hr 45 min
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">KMs:</span> 172.6 km
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 3500
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="rating">
                      <span className="text-muted">Rating: </span>
                      <Badge variant="success">
                        <FaStar /> <FaStar /> <FaStarHalfAlt />
                      </Badge>
                    </div>
                    <small className="text-muted">Reviews (36)</small>
                  </div>

                  <div
                    style={{ marginTop: "20px" }}
                    className="  w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 3rd box */}
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={kodaikanalImg}
                  alt="Rameshwaram  to Kodaikanal"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Kodaikanal
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className=" fw-bold ">Duration:</span> 5 hr 53 min
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">KMs:</span> 287.6 km
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 22000
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="rating">
                      <span className="text-muted">Rating: </span>
                      <Badge variant="success">
                        <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
                      </Badge>
                    </div>
                    <small className="text-muted">Reviews (56)</small>
                  </div>

                  <div className="mt-3  w-100 btn-group">
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={kumbakonamImg}
                  alt="Rameshwaram  to Kumbakonam"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Kumbakonam
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className=" fw-bold ">Duration:</span> 5 hr 16 min
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">KMs:</span> 289.9 km
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 18000
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="rating">
                      <span className="text-muted">Rating: </span>
                      <Badge variant="success">
                        <FaStar /> <FaStar />
                      </Badge>
                    </div>
                    <small className="text-muted">Reviews (45)</small>
                  </div>

                  <div
                    style={{ marginTop: "20px" }}
                    className=" w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={kanyaImg}
                  alt="Rameshwaram  to Kaniyakumari"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Kaniyakumari
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className=" fw-bold ">Duration:</span> 5 hr 30 min
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">KMs:</span> 307.7 km
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 25000
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="rating">
                      <span className="text-muted">Rating: </span>
                      <Badge variant="success">
                        <FaStar /> <FaStar /> <FaStar />
                        <FaStar /> <FaStar />
                      </Badge>
                    </div>
                    <small className="text-muted">Reviews (52)</small>
                  </div>

                  <div className="mt-3  w-100 btn-group">
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={yercaudImg}
                  alt="Rameshwaram  to Yercaud"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to yercaud
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className=" fw-bold ">Duration:</span> 7 hr 53 min
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">KMs:</span> 434.2 km
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 10000
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="rating">
                      <span className="text-muted">Rating: </span>
                      <Badge variant="success">
                        <FaStar /> <FaStar /> <FaStarHalfAlt />
                      </Badge>
                    </div>
                    <small className="text-muted">Reviews (74)</small>
                  </div>

                  <div
                    style={{ marginTop: "20px" }}
                    className="  w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={theniImg}
                  alt="Rameshwaram  to Theni"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">Rameshwaram to Theni</span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className=" fw-bold ">Duration:</span> 4 hr 41 min
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">KMs:</span> 262.4 km
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 13000
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="rating">
                      <span className="text-muted">Rating: </span>
                      <Badge variant="success">
                        <FaStar /> <FaStarHalfAlt />
                      </Badge>
                    </div>
                    <small className="text-muted">Reviews (88)</small>
                  </div>

                  <div
                    style={{ marginTop: "20px" }}
                    className=" w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={chennaiImg}
                  alt="Rameshwaram  to Chennai"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Chennai
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className=" fw-bold ">Duration:</span> 9 hr 39 min
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">KMs:</span> 559.3 km
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 30000
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="rating">
                      <span className="text-muted">Rating: </span>
                      <Badge variant="success">
                        <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
                      </Badge>
                    </div>
                    <small className="text-muted">Reviews (45)</small>
                  </div>

                  <div
                    style={{ marginTop: "36px" }}
                    className=" w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={hogenakkalImg}
                  alt="Rameshwaram  to Hogenakkal"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Hogenakkal
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className=" fw-bold ">Duration:</span> 8 hr 51 min
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">KMs:</span> 495.7 km
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 14000
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="rating">
                      <span className="text-muted">Rating: </span>
                      <Badge variant="success">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        <FaStarHalfAlt />
                      </Badge>
                    </div>
                    <small className="text-muted">Reviews (64)</small>
                  </div>

                  <div className="mt-3  w-100 btn-group">
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default RameshwaramPck;
