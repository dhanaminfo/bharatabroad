import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Row,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import my_logo from "../Images/my_logo4.png";

function Footer() {
  return (
    <>
      <footer
        style={{ padding: "0 16px", backgroundColor: "#f4f4f6", color: "#fff" }}
      >
        {/* Desktop Footer  */}

        <Container fluid className="col-lg-11 d-none d-lg-block">
          <Row className="pt-4 py-lg-2">
            <Col lg={2} className="py-lg-4">
              <div>
                <img
                  src={my_logo}
                  alt="Megasails"
                  className="img-fluid"
                  style={{
                    height: "30px",
                    // filter: "brightness(0) invert(1)",
                  }}
                />
                <Row className="g-2 d-flex justify-content-center">
                  <Col xs={2}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png"
                      alt="flags"
                      className="img-fluid"
                      style={{
                        minHeight: "15px",
                        height: "auto",
                      }}
                    />
                  </Col>
                  <Col xs={2}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/180px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                      alt="flags"
                      className="img-fluid"
                      style={{
                        minHeight: "15px",
                        height: "auto",
                        width: "auto",
                      }}
                    />
                  </Col>
                  <Col xs={2}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                      alt="flags"
                      className="img-fluid"
                      style={{
                        minHeight: "15px",
                        height: "auto",
                        width: "auto",
                      }}
                    />
                  </Col>
                  <Col xs={2}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/180px-Flag_of_Canada.svg.png"
                      alt="flags"
                      className="img-fluid"
                      style={{
                        minHeight: "15px",
                        height: "auto",
                        width: "auto",
                      }}
                    />
                  </Col>
                  <Col xs={2}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/180px-Flag_of_Australia_%28converted%29.svg.png"
                      alt="flags"
                      className="img-fluid"
                      style={{
                        minHeight: "15px",
                        height: "auto",
                        width: "auto",
                      }}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={10} className="m-0">
              <ul className="m-0 p-0 d-flex flex-column flex-lg-row footer-items">
                <li>
                  <div>
                    <div className="p-lg-4">
                      <h6 className="text-dark mb-3">About us</h6>
                      <p
                        className="m-0 w-60 width-lg-100"
                        style={{ color: "#000000", fontSize: "12px" }}
                      >
                        A Community Portal for the people of Bharat Desh
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to={`/events`}>
                    <div className="p-lg-4">
                      <h6 className="text-dark mb-3">Events</h6>
                      <p
                        className="m-0 w-60 width-lg-100"
                        style={{ color: "#000000", fontSize: "12px" }}
                      >
                        Browse for Trending Events
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to={`/Sports`}>
                    <div className="p-lg-4">
                      <h6 className="text-dark mb-3">Sports</h6>
                      <p
                        className="m-0 w-60 width-lg-100"
                        style={{ color: "#000000", fontSize: "12px" }}
                      >
                        Browse our wide range of Sports.
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                    <div className="p-lg-4">
                      <h6 className="text-dark mb-3">Contact us</h6>
                      <p
                        className="m-0 w-60 width-lg-100"
                        style={{ color: "#000000", fontSize: "12px" }}
                      >
                        Advertise yourself
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>

          <hr className="text-dark" />
        </Container>

        <Container fluid className="col-lg-11 d-none d-lg-block">
          <Row className="justify-content-between align-items-center pb-3 py-lg-3">
            <Col xs={12} lg={6}>
              <div
                className="d-flex flex-column flex-lg-row align-items-lg-center mb-4 mb-lg-0"
                style={{ gap: "12px" }}
              >
                <h6 className="m-0 text-dark" style={{ fontSize: "14px" }}>
                  Copyright © 2024 BharatAbroad
                </h6>
                <a
                  href="/privacy-policy"
                  className="m-0 text-dark"
                  style={{ fontSize: "14px" }}
                >
                  Privacy Policy
                </a>
                <Link
                  to={`/marketing-policy`}
                  className="m-0 text-dark"
                  style={{ fontSize: "14px" }}
                >
                  Marketing Policy
                </Link>
              </div>
            </Col>

            <Col xs={12} lg={6} className="text-end">
              <div className="d-flex justify-content-end">
                <Nav className="d-flex">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png"
                        alt=""
                        className="img-fluid"
                        style={{ height: "20px" }}
                      />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/1200px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png"
                        alt=""
                        className="img-fluid"
                        style={{ height: "20px" }}
                      />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                        alt=""
                        className="img-fluid"
                        style={{ height: "20px" }}
                      />
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Button className="fw-bold" variant="danger" size="sm">
                Subscribe
              </Button> */}
                </Nav>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Mobile $ Tab screen Footer  */}
        <Container className="d-block d-sm-block d-md-block d-lg-none py-3">
          <div className="text-center">
            <div>
              <img
                src={my_logo}
                alt="Megasails"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "65px",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <div>
                <small className="text-dark">
                  A Community Portal for the people of Bharat Desh
                </small>
              </div>
            </div>
          </div>
          <div className="row pt-3 text-center">
            <div className="col-4">
              <Link to={`/events`}>
                <div className="p-lg-4">
                  <h6 className="text-dark mb-3">Events</h6>
                </div>
              </Link>
              <hr />
            </div>
            <div className="col-4">
              <Link to={`/Sports`}>
                <div className="p-lg-4">
                  <h6 className="text-dark mb-3">Sports</h6>
                </div>
              </Link>
              <hr />
            </div>
            <div className="col-4">
              <Link to={`/##`}>
                <div className="p-lg-4">
                  <h6 className="text-dark mb-3">Advertise yourself</h6>
                </div>
              </Link>
              <hr />
            </div>
          </div>

          <div className="text-center">
            <h6 className="m-0" style={{ fontSize: "14px" }}>
              Copyright © 2024 BharatAbroad
            </h6>
            <div>
              <Link
                to={`/privacy-policy`}
                className="m-0 text-dark"
                style={{ fontSize: "14px" }}
              >
                Privacy Policy
              </Link>{" "}
              .{" "}
              <Link
                to={`/marketing-policy`}
                className="m-0 text-dark"
                style={{ fontSize: "14px" }}
              >
                Marketing Policy
              </Link>
            </div>
            <hr />
            <Nav className="d-flex">
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png"
                    alt=""
                    className="img-fluid"
                    style={{ height: "20px" }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/1200px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png"
                    alt=""
                    className="img-fluid"
                    style={{ height: "20px" }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                    alt=""
                    className="img-fluid"
                    style={{ height: "20px" }}
                  />
                </Nav.Link>
              </Nav.Item>
              {/* <Button className="fw-bold" variant="danger" size="sm">
                Subscribe
              </Button> */}
            </Nav>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
