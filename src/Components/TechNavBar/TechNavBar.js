import React from "react";
import PropTypes from "prop-types";
import styles from "./TechNavBar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import myLogo from "../../Images/my_logo4.png";
import { Link } from "react-router-dom";

const TechNavBar = () => (
  <div className={styles.TechNavBar}>
    <div className="d-none d-md-none d-lg-block">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid></Container>
      </Navbar>
      <Navbar className="">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand as={Link} to="/home">
            <img
              src={myLogo}
              alt=""
              className="img-fluid"
              style={{ height: "100px" }}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid className="d-flex justify-content-start border-bottom">
          <h5 className="ps-2 fw-bold">TECHNOLOGY</h5>
        </Container>
      </Navbar>
      <Navbar bg="light" data-bs-theme="light" className="mt-0 pt-0 ">
        <Container fluid className="d-flex justify-content-left">
          <Nav className="d-flex justify-content-left fw-bold">
            <Nav.Item>
              <Nav.Link as={Link} to="artificial-intelligence">
                Artificial Intelligence
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="machine-learning">
                Machine Learning
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="virtual-reality">
                Virtual Reality
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  </div>
);

TechNavBar.propTypes = {};

TechNavBar.defaultProps = {};

export default TechNavBar;
