// AboutPage.js
import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';


//Google maps api
import MapComponent from './MapComponent.js';


function About(){

  const apiKey = 'AIzaSyBFTMtMpiS6Zq1QWE84Rm2HZlNxXKDFZ9s';
  const latitude = 51.52098846435547;
  const longitude = -0.14010393619537354;

    return (
        <Container fluid className="about-page">
          <Row>
            <Col md={6} className="about-image">
              <Image src="https://img.freepik.com/free-photo/top-view-business-items-with-growth-cones-arrow_23-2148780561.jpg" alt="About Us Image" fluid />
            </Col>
            <Col md={6} className="about-text">
              <h1>About This Site</h1>
              <p>
                This is a simple productivity management web app created for the Web
                Development Coursework Assessment.
              </p>
              <p>
                For more information, contact the owner at w1643899@my.westminster.ac.uk
              </p>

              <h2>Location</h2>
              <p>Our headquarters</p>
              <MapComponent apiKey={apiKey} latitude={latitude} longitude={longitude} />
            </Col>
          </Row>
        </Container>
      );
}

export default About;

