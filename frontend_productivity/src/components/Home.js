// Home.js
// Standard corporate information showcasing some productivity stuff

import react from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home(){
    return(
        <Container fluid className="about-page">
          <Row>
            <Col md={6} className="about-image">
              <Image src="https://img.freepik.com/free-vector/character-time-management-concept_23-2148822089.jpg" alt="Productivity Art Image" fluid />
            </Col>
            <Col md={6} className="about-text">
              <h1>Your productivity solution!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
              <p>dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
              <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <h2>Stock Images go here</h2>
              <Image src="https://www.shutterstock.com/image-vector/businessman-sets-goals-runs-on-260nw-1222242154.jpg" alt="Productivity Art Image 2" fluid />
            </Col>
          </Row>
        </Container>
    );
};

export default Home;