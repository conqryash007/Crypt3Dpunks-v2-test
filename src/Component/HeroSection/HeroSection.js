import React from 'react';
import HeaderTittle from '../../Assets/Links/Crypt3D Scirbble Animation Transparent.gif'
import './HeroSection.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderManPic from "../../Assets/Links/Jick Magger Crypt3d Transparent.png"
import { Row ,Col} from 'react-bootstrap';
const HeroSection = () => {
    return (
        <div >
            <div className='mainHeader'>
            <Container>
             <Row lg={2} >
                
                <Col >
                    <img style={{marginTop:"100px",marginLeft:"-50%"}} width="150%"src={HeaderManPic} alt="" />
                </Col>
                <Col className="d-flex align-items-center">
                    <img style={{marginTop:"100px"}} width="100%" src={HeaderTittle} alt="" />
                </Col>
            </Row>               
            </Container>

            </div>
            <div className='HeaderContent'>
                {/* <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav> */}

                <Nav>
                    <Nav.Link href="#">
                        ABOUT
                    </Nav.Link>
                    <Nav.Link href="#">
                        ROADMAP
                    </Nav.Link>
                    <Nav.Link href="#">
                        LORE
                    </Nav.Link>
                    <Nav.Link href="#">
                        TEAM
                    </Nav.Link>
                    <Nav.Link href="#">
                        MINT
                    </Nav.Link>
                    <Nav.Link href="#">
                        FAQ
                    </Nav.Link>
                </Nav>
                {/* </Navbar.Collapse>
                    </Container>
                </Navbar> */}
            </div>

        </div>
    );
};

export default HeroSection;