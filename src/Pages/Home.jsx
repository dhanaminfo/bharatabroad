import React from "react";
import NavBar from "../Components/NavBar";
import HomeMaster from "../Components/HomeMaster";
import Eventscard from "../Components/Eventscard";
import { Col, Container, Image, NavLink, Row } from "react-bootstrap";
import Sportscard from "../Components/SportsCard";
import { Link } from "react-router-dom";
import AndraFlood from "./AndraFlood";
import AchievementsTimeline from "../Components/Rattantata";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeMaster />
      {/* <AndraFlood /> */}
      <Container fluid className="mb-3">
        <NavLink as={Link} to={`ratan-tata`}>
          <Row>
            <Col lg={6}>
              <Image
                className="mx-auto d-block rounded-2"
                src="https://th-i.thgim.com/public/incoming/15dbf8/article68738140.ece/alternates/LANDSCAPE_1200/image%206.jpeg"
                fluid
              />
            </Col>
            <Col lg={6}>
              <h5 className="fw-bold text-primary-emphasis">
                The Padma Bhushan and The Padma Vibhushan Ratan Tata passes away
                at 86
              </h5>
              <p>
                Tata was admitted to Breach Candy Hospital in critical condition
                and was under intensive care from 7 October 2024. He died there
                on the night of 9 October 2024 at the age of 86. A day of
                mourning was announced by the Government of Maharashtra
                following his death.
              </p>

              <p>
                Ratan Tata To Receive State Funeral; Mortal Remains To Be Kept
                At NCPA For Public Darshan Today
              </p>

              <p>
                During this period, the national flag will fly at half-mast in
                government offices in the state and no entertainment or
                entertainment programs will be organized. CM has announced state
                mourning on Thursday (Oct 10).
              </p>
            </Col>
          </Row>
        </NavLink>
      </Container>
      {/* <AchievementsTimeline /> */}
      <section style={{ backgroundColor: "#e6e7ea" }}>
        <Container fluid>
          <Row className="g-0 py-4">
            <Col lg={9} md={9} sm={12} xs={12}>
              <Eventscard />
              <Sportscard />
            </Col>
            <Col lg={3} md={3} className="mt-3">
              <div className="d-flex justify-content-center">
                <small>Advertisement</small>
              </div>
              <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                <Image
                  className="mx-auto d-block pt-2 border"
                  src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Brown+Illustrative+Krishna+Janmashtami+Greeting+Instagram+Post+(1).gif"
                  fluid
                />
              </Link>

              <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                <Image
                  className="mx-auto d-block pt-2 border"
                  src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Maroon+traditional+Minimal+Guru+Purnima+Greeting+Instagram+Post.gif"
                  fluid
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
