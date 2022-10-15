import React from "react";
import HeaderTittle from "../../Assets/Links/Crypt3D Scirbble Animation Transparent.webm";
import "./HeroSection.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import HeaderManPic from "../../Assets/Links/Jick Magger Crypt3d Transparent.png";
import { Row, Col } from "react-bootstrap";
const HeroSection = () => {
  return (
    <div>
      <div className="mainHeader">
        <Container>
          <Row lg={2}>
            <Col data-aos="fade-in" data-aos-duration="3000">
              <img
                style={{ marginTop: "100px", marginLeft: "-50%" }}
                className="main-man"
                src={HeaderManPic}
                alt=""
              />
            </Col>
            <Col
              className="d-flex align-items-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <div>
                <img
                  className="main-gif"
                  style={{ marginTop: "100px" }}
                  width="100%"
                  src={HeaderTittle}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="HeaderContent"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Nav>
          <Nav.Link href="https://www.crypt3dpunks.io/#ROADMAP">About</Nav.Link>
          <Nav.Link href="https://www.crypt3dpunks.io/roadmap#2">
            Roadmap
          </Nav.Link>
          <Nav.Link href="https://www.crypt3dpunks.io/punk-lore">Lore</Nav.Link>
          <Nav.Link href="https://www.crypt3dpunks.io/team">Team</Nav.Link>
          <Nav.Link href="https://www.crypt3dpunks.io/#mint">Mint</Nav.Link>
          <Nav.Link href="https://www.crypt3dpunks.io/#faq">FAQ</Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default HeroSection;
