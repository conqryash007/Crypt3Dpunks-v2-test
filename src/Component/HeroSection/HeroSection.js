import React from "react";
import HeaderTittle from "../../Assets/Links/Crypt3D Scirbble Animation Transparent.gif";
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
                width="150%"
                src={HeaderManPic}
                alt=""
              />
            </Col>
            <Col className="d-flex align-items-center" data-aos="zoom-in"  data-aos-duration="3000">
             <div >
              <img

                
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
      <div className="HeaderContent" data-aos="fade-down" data-aos-duration="1000">
        <Nav>
          <Nav.Link href="https://www.crypt3dpunks.io/#ROADMAP">ABOUT</Nav.Link>
          <Nav.Link href="https://www.crypt3dpunks.io/roadmap#2">
            ROADMAP
          </Nav.Link>
          <Nav.Link href="https://www.crypt3dpunks.io/punk-lore">LORE</Nav.Link>
          <Nav.Link href="https://www.crypt3dpunks.io/team">TEAM</Nav.Link>
          <Nav.Link href="https://www.crypt3dpunks.io/#mint">MINT</Nav.Link>
          <Nav.Link href="https://www.crypt3dpunks.io/#faq">FAQ</Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default HeroSection;
