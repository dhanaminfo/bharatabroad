import React, { useState } from "react";
import NavBar from "../../Components/NavBar";
import SportsNavBar from "../../Components/Sports/SportsNavBar";
import { Col, Container, Row, Nav, Card, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Cricket = () => {
  const [activeSection, setActiveSection] = useState("home");
  const isLargeScreen = useMediaQuery({ query: "(min-width: 992px)" });

  const renderSection = () => {
    switch (activeSection) {
      case "ipl":
        return (
          <div>
            <Row>
              <Col lg={12}>
                <div className="row g-1 d-flex align-itens-center">
                  <div className="col-lg-1">
                    <Image
                      className=""
                      src="https://a.espncdn.com/combiner/i?img=/i/leaguelogos/cricket/500/8048.png&w=80&h=80&transparent=true"
                      width={"60px"}
                    />
                  </div>
                  <div className="col-lg-10 d-flex align-itens-center">
                    <div className="py-3">
                      <h5 className="mb-0 pb-0">Indian Premier League 2024</h5>
                    </div>
                  </div>
                </div>
                <Row className="px-lg-3 ">
                  <Col md={12}>
                    <h5 className="m-0 pb-1">Match Results</h5>
                  </Col>
                  <Col
                    md={6}
                    className=" p-3 rounded-2 border"
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <div>
                      <small
                        className="mb-1 text-dark"
                        style={{ fontSize: "14px" }}
                      >
                        1st Match, Chennai, Mar 22 2024
                      </small>
                    </div>
                    <div className="row">
                      <div className="col-lg-10">
                        <p
                          className="mb-1 pb-0 fw-bold text-secondary"
                          style={{ fontSize: "14px" }}
                        >
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335970.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Royal Challengers Bangaluru{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <small className="mb-1 fw-bold text-secondary text-end">
                          173/6
                        </small>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-10">
                        <p
                          className="mb-1 fw-bold text-dark"
                          style={{ fontSize: "14px" }}
                        >
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335974.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Chennai Super Kings{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <small className="mb-1 fw-bold text-dark text-end">
                          176/4
                        </small>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md={6}
                    className=" p-3 rounded-2 border"
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <div>
                      <small
                        className="mb-1 text-dark"
                        style={{ fontSize: "14px" }}
                      >
                        2nd Match, Chennai, Mar 22 2024
                      </small>
                    </div>
                    <div className="row">
                      <div className="col-lg-10">
                        <p
                          className="mb-1 pb-0 fw-bold text-secondary"
                          style={{ fontSize: "14px" }}
                        >
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335975.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Delhi Capitals{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <small className="mb-1 fw-bold text-secondary text-end">
                          173/6
                        </small>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-10">
                        <p
                          className="mb-1 fw-bold text-dark"
                          style={{ fontSize: "14px" }}
                        >
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335973.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Punjab Kings{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <small className="mb-1 fw-bold text-dark text-end">
                          176/4
                        </small>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md={6}
                    className=" p-3 rounded-2 border"
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <div>
                      <small
                        className="mb-1 text-dark"
                        style={{ fontSize: "14px" }}
                      >
                        3rd Match, Chennai, Mar 22 2024
                      </small>
                    </div>
                    <div className="row">
                      <div className="col-lg-10">
                        <p
                          className="mb-1 pb-0 fw-bold text-secondary"
                          style={{ fontSize: "14px" }}
                        >
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335971.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Kolkata Knight Riders{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <small className="mb-1 fw-bold text-secondary text-end">
                          173/6
                        </small>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-10">
                        <p
                          className="mb-1 fw-bold text-dark"
                          style={{ fontSize: "14px" }}
                        >
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/628333.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Sunrisers Hyderabad{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <small className="mb-1 fw-bold text-success text-end">
                          176/4
                        </small>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md={6}
                    className=" p-3 rounded-2 border"
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <div>
                      <small
                        className="mb-1 text-dark"
                        style={{ fontSize: "14px" }}
                      >
                        4th Match, Chennai, Mar 22 2024
                      </small>
                    </div>
                    <div className="row">
                      <div className="col-lg-10">
                        <p
                          className="mb-1 pb-0 fw-bold text-secondary"
                          style={{ fontSize: "14px" }}
                        >
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335977.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Rajasthan Royals{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <small className="mb-1 fw-bold text-secondary text-end">
                          173/6
                        </small>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-9">
                        <p
                          className="mb-1 fw-bold text-dark"
                          style={{ fontSize: "14px" }}
                        >
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/1298768.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Lucknow Super Giants{" "}
                        </p>
                      </div>

                      <div className="col-lg-1">
                        <small className="mb-1 fw-bold text-dark text-end">
                          <i class="fa-solid fa-trophy"></i>
                        </small>
                      </div>
                      <div className="col-lg-1">
                        <small className="mb-1 fw-bold text-dark text-end">
                          176/4
                        </small>
                      </div>
                    </div>
                  </Col>
                  <Col md={12}>
                    <h5 className="m-0 pt-3">Schedule</h5>
                  </Col>
                  <div>
                    <small
                      className="mb-1 text-primary"
                      style={{ fontSize: "14px" }}
                    >
                      Friday, October 4, 2024
                    </small>
                  </div>
                  <Col md={12} className="bg-white p-2 px-3 rounded-2 border">
                    <small style={{ fontSize: "10px" }} className="fw-bold">
                      MATCH UP
                    </small>
                    <div className="row">
                      <div className="col-lg-3">
                        <p className="mb-1 pb-0 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335977.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Rajasthan Royals{" "}
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <p className="mb-1 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/1298768.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Lucknow Super Giants{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <p className="mb-1 ">5.30 PM</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="mb-1 ">Chennai, TamilNadu, India</p>
                      </div>
                    </div>
                    <div className="row"></div>
                  </Col>
                  <Col md={12} className="bg-white py-2 px-3 rounded-2 border">
                    <small style={{ fontSize: "10px" }} className="fw-bold">
                      MATCH UP
                    </small>
                    <div className="row">
                      <div className="col-lg-3">
                        <p className="mb-1 pb-0 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335975.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Delhi Capitals{" "}
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <p className="mb-1 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335973.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Punjab Kings{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <p className="mb-1 ">5.30 PM</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="mb-1 ">Chennai, TamilNadu, India</p>
                      </div>
                    </div>
                    <div className="row"></div>
                  </Col>
                  <div>
                    <small
                      className="mb-1 text-primary"
                      style={{ fontSize: "14px" }}
                    >
                      Monday, October 10, 2024
                    </small>
                  </div>
                  <Col md={12} className="bg-white p-2 px-3 rounded-2 border">
                    <small style={{ fontSize: "10px" }} className="fw-bold">
                      MATCH UP
                    </small>
                    <div className="row">
                      <div className="col-lg-3">
                        <p className="mb-1 pb-0 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335977.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Rajasthan Royals{" "}
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <p className="mb-1 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/1298768.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Lucknow Super Giants{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <p className="mb-1 ">5.30 PM</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="mb-1 ">Chennai, TamilNadu, India</p>
                      </div>
                    </div>
                    <div className="row"></div>
                  </Col>
                  <Col md={12} className="bg-white py-2 px-3 rounded-2 border">
                    <small style={{ fontSize: "10px" }} className="fw-bold">
                      MATCH UP
                    </small>
                    <div className="row">
                      <div className="col-lg-3">
                        <p className="mb-1 pb-0 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335975.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Delhi Capitals{" "}
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <p className="mb-1 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335973.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Punjab Kings{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <p className="mb-1 ">5.30 PM</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="mb-1 ">Chennai, TamilNadu, India</p>
                      </div>
                    </div>
                    <div className="row"></div>
                  </Col>
                  <Col md={12} className="bg-white py-2 px-3 rounded-2 border">
                    <small style={{ fontSize: "10px" }} className="fw-bold">
                      MATCH UP
                    </small>
                    <div className="row">
                      <div className="col-lg-3">
                        <p className="mb-1 pb-0 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335975.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Delhi Capitals{" "}
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <p className="mb-1 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335973.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Punjab Kings{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <p className="mb-1 ">5.30 PM</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="mb-1 ">Chennai, TamilNadu, India</p>
                      </div>
                    </div>
                    <div className="row"></div>
                  </Col>
                  <div>
                    <small
                      className="mb-1 text-primary"
                      style={{ fontSize: "14px" }}
                    >
                      Friday, October 4, 2024
                    </small>
                  </div>
                  <Col md={12} className="bg-white p-2 px-3 rounded-2 border">
                    <small style={{ fontSize: "10px" }} className="fw-bold">
                      MATCH UP
                    </small>
                    <div className="row">
                      <div className="col-lg-3">
                        <p className="mb-1 pb-0 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335977.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Rajasthan Royals{" "}
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <p className="mb-1 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/1298768.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Lucknow Super Giants{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <p className="mb-1 ">5.30 PM</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="mb-1 ">Chennai, TamilNadu, India</p>
                      </div>
                    </div>
                    <div className="row"></div>
                  </Col>
                  <Col md={12} className="bg-white py-2 px-3 rounded-2 border">
                    <small style={{ fontSize: "10px" }} className="fw-bold">
                      MATCH UP
                    </small>
                    <div className="row">
                      <div className="col-lg-3">
                        <p className="mb-1 pb-0 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335975.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Delhi Capitals{" "}
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <p className="mb-1 ">
                          <Image
                            className=""
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335973.png&h=35&w=35"
                            width={"20px"}
                          />{" "}
                          Punjab Kings{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <p className="mb-1 ">5.30 PM</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="mb-1 ">Chennai, TamilNadu, India</p>
                      </div>
                    </div>
                    <div className="row"></div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        );
      case "scores":
        return (
          <div className="bg-white mb-3">
            <Row className="px-lg-3 ">
              {/* <Col md={12}>
                <h5 className="m-0 pb-1">Match Results</h5>
              </Col> */}
              <Col
                md={6}
                className=" p-3 rounded-2 border"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <div>
                  <small
                    className="mb-1 text-dark"
                    style={{ fontSize: "14px" }}
                  >
                    1st Match, Chennai, Mar 22 2024
                  </small>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <p
                      className="mb-1 pb-0 fw-bold text-secondary"
                      style={{ fontSize: "14px" }}
                    >
                      <Image
                        className=""
                        src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335970.png&h=35&w=35"
                        width={"20px"}
                      />{" "}
                      Royal Challengers Bangaluru{" "}
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <small className="mb-1 fw-bold text-secondary text-end">
                      173/6
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <p
                      className="mb-1 fw-bold text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <Image
                        className=""
                        src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335974.png&h=35&w=35"
                        width={"20px"}
                      />{" "}
                      Chennai Super Kings{" "}
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <small className="mb-1 fw-bold text-dark text-end">
                      176/4
                    </small>
                  </div>
                </div>
              </Col>
              <Col
                md={6}
                className=" p-3 rounded-2 border"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <div>
                  <small
                    className="mb-1 text-dark"
                    style={{ fontSize: "14px" }}
                  >
                    2nd Match, Chennai, Mar 22 2024
                  </small>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <p
                      className="mb-1 pb-0 fw-bold text-secondary"
                      style={{ fontSize: "14px" }}
                    >
                      <Image
                        className=""
                        src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335975.png&h=35&w=35"
                        width={"20px"}
                      />{" "}
                      Delhi Capitals{" "}
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <small className="mb-1 fw-bold text-secondary text-end">
                      173/6
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <p
                      className="mb-1 fw-bold text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <Image
                        className=""
                        src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335973.png&h=35&w=35"
                        width={"20px"}
                      />{" "}
                      Punjab Kings{" "}
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <small className="mb-1 fw-bold text-dark text-end">
                      176/4
                    </small>
                  </div>
                </div>
              </Col>
              <Col
                md={6}
                className=" p-3 rounded-2 border"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <div>
                  <small
                    className="mb-1 text-dark"
                    style={{ fontSize: "14px" }}
                  >
                    3rd Match, Chennai, Mar 22 2024
                  </small>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <p
                      className="mb-1 pb-0 fw-bold text-secondary"
                      style={{ fontSize: "14px" }}
                    >
                      <Image
                        className=""
                        src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335971.png&h=35&w=35"
                        width={"20px"}
                      />{" "}
                      Kolkata Knight Riders{" "}
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <small className="mb-1 fw-bold text-secondary text-end">
                      173/6
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <p
                      className="mb-1 fw-bold text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <Image
                        className=""
                        src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/628333.png&h=35&w=35"
                        width={"20px"}
                      />{" "}
                      Sunrisers Hyderabad{" "}
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <small className="mb-1 fw-bold text-success text-end">
                      176/4
                    </small>
                  </div>
                </div>
              </Col>
              <Col
                md={6}
                className=" p-3 rounded-2 border"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <div>
                  <small
                    className="mb-1 text-dark"
                    style={{ fontSize: "14px" }}
                  >
                    4th Match, Chennai, Mar 22 2024
                  </small>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <p
                      className="mb-1 pb-0 fw-bold text-secondary"
                      style={{ fontSize: "14px" }}
                    >
                      <Image
                        className=""
                        src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335977.png&h=35&w=35"
                        width={"20px"}
                      />{" "}
                      Rajasthan Royals{" "}
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <small className="mb-1 fw-bold text-secondary text-end">
                      173/6
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-9">
                    <p
                      className="mb-1 fw-bold text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <Image
                        className=""
                        src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/1298768.png&h=35&w=35"
                        width={"20px"}
                      />{" "}
                      Lucknow Super Giants{" "}
                    </p>
                  </div>

                  <div className="col-lg-1">
                    <small className="mb-1 fw-bold text-dark text-end">
                      <i class="fa-solid fa-trophy"></i>
                    </small>
                  </div>
                  <div className="col-lg-1">
                    <small className="mb-1 fw-bold text-dark text-end">
                      176/4
                    </small>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        );
      case "series":
        return (
          <div className="row g-0 bg-white mb-3 p-2">
            <div>
              <small className="mb-1 text-primary" style={{ fontSize: "14px" }}>
                Friday, October 4, 2024
              </small>
            </div>
            <Col md={12} className="bg-white p-2 px-3 rounded-2 ">
              <small style={{ fontSize: "10px" }} className="fw-bold">
                MATCH UP
              </small>
              <div className="row">
                <div className="col-lg-3">
                  <p className="mb-1 pb-0 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335977.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Rajasthan Royals{" "}
                  </p>
                </div>
                <div className="col-lg-3">
                  <p className="mb-1 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/1298768.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Lucknow Super Giants{" "}
                  </p>
                </div>
                <div className="col-lg-2">
                  <p className="mb-1 ">5.30 PM</p>
                </div>
                <div className="col-lg-4">
                  <p className="mb-1 ">Chennai, TamilNadu, India</p>
                </div>
              </div>
              <div className="row"></div>
            </Col>
            <Col md={12} className="bg-white py-2 px-3 rounded-2 ">
              <small style={{ fontSize: "10px" }} className="fw-bold">
                MATCH UP
              </small>
              <div className="row">
                <div className="col-lg-3">
                  <p className="mb-1 pb-0 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335975.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Delhi Capitals{" "}
                  </p>
                </div>
                <div className="col-lg-3">
                  <p className="mb-1 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335973.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Punjab Kings{" "}
                  </p>
                </div>
                <div className="col-lg-2">
                  <p className="mb-1 ">5.30 PM</p>
                </div>
                <div className="col-lg-4">
                  <p className="mb-1 ">Chennai, TamilNadu, India</p>
                </div>
              </div>
              <div className="row"></div>
            </Col>
            <div>
              <small className="mb-1 text-primary" style={{ fontSize: "14px" }}>
                Monday, October 10, 2024
              </small>
            </div>
            <Col md={12} className="bg-white p-2 px-3 rounded-2 ">
              <small style={{ fontSize: "10px" }} className="fw-bold">
                MATCH UP
              </small>
              <div className="row">
                <div className="col-lg-3">
                  <p className="mb-1 pb-0 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335977.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Rajasthan Royals{" "}
                  </p>
                </div>
                <div className="col-lg-3">
                  <p className="mb-1 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/1298768.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Lucknow Super Giants{" "}
                  </p>
                </div>
                <div className="col-lg-2">
                  <p className="mb-1 ">5.30 PM</p>
                </div>
                <div className="col-lg-4">
                  <p className="mb-1 ">Chennai, TamilNadu, India</p>
                </div>
              </div>
              <div className="row"></div>
            </Col>
            <Col md={12} className="bg-white py-2 px-3 rounded-2 ">
              <small style={{ fontSize: "10px" }} className="fw-bold">
                MATCH UP
              </small>
              <div className="row">
                <div className="col-lg-3">
                  <p className="mb-1 pb-0 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335975.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Delhi Capitals{" "}
                  </p>
                </div>
                <div className="col-lg-3">
                  <p className="mb-1 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335973.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Punjab Kings{" "}
                  </p>
                </div>
                <div className="col-lg-2">
                  <p className="mb-1 ">5.30 PM</p>
                </div>
                <div className="col-lg-4">
                  <p className="mb-1 ">Chennai, TamilNadu, India</p>
                </div>
              </div>
              <div className="row"></div>
            </Col>
            <Col md={12} className="bg-white py-2 px-3 rounded-2 ">
              <small style={{ fontSize: "10px" }} className="fw-bold">
                MATCH UP
              </small>
              <div className="row">
                <div className="col-lg-3">
                  <p className="mb-1 pb-0 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335975.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Delhi Capitals{" "}
                  </p>
                </div>
                <div className="col-lg-3">
                  <p className="mb-1 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335973.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Punjab Kings{" "}
                  </p>
                </div>
                <div className="col-lg-2">
                  <p className="mb-1 ">5.30 PM</p>
                </div>
                <div className="col-lg-4">
                  <p className="mb-1 ">Chennai, TamilNadu, India</p>
                </div>
              </div>
              <div className="row"></div>
            </Col>
            <div>
              <small className="mb-1 text-primary" style={{ fontSize: "14px" }}>
                Friday, October 4, 2024
              </small>
            </div>
            <Col md={12} className="bg-white p-2 px-3 rounded-2 border">
              <small style={{ fontSize: "10px" }} className="fw-bold">
                MATCH UP
              </small>
              <div className="row">
                <div className="col-lg-3">
                  <p className="mb-1 pb-0 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335977.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Rajasthan Royals{" "}
                  </p>
                </div>
                <div className="col-lg-3">
                  <p className="mb-1 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/1298768.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Lucknow Super Giants{" "}
                  </p>
                </div>
                <div className="col-lg-2">
                  <p className="mb-1 ">5.30 PM</p>
                </div>
                <div className="col-lg-4">
                  <p className="mb-1 ">Chennai, TamilNadu, India</p>
                </div>
              </div>
              <div className="row"></div>
            </Col>
            <Col md={12} className="bg-white py-2 px-3 rounded-2 border">
              <small style={{ fontSize: "10px" }} className="fw-bold">
                MATCH UP
              </small>
              <div className="row">
                <div className="col-lg-3">
                  <p className="mb-1 pb-0 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335975.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Delhi Capitals{" "}
                  </p>
                </div>
                <div className="col-lg-3">
                  <p className="mb-1 ">
                    <Image
                      className=""
                      src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/335973.png&h=35&w=35"
                      width={"20px"}
                    />{" "}
                    Punjab Kings{" "}
                  </p>
                </div>
                <div className="col-lg-2">
                  <p className="mb-1 ">5.30 PM</p>
                </div>
                <div className="col-lg-4">
                  <p className="mb-1 ">Chennai, TamilNadu, India</p>
                </div>
              </div>
            </Col>
          </div>
        );
      default:
        return (
          <div className="bg-white mb-3">
            <Container className="py-3">
              <Card className="border-0 mb-3">
                <Row className="g-0">
                  <Col>
                    <img
                      src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/esci/media/motion/2024/0924/dm_240924_INET_CRIC_indvban_matchday_sanjay_on_ro-ko_non-branded_GLOBAL/dm_240924_INET_CRIC_indvban_matchday_sanjay_on_ro-ko_non-branded_GLOBAL.jpg"
                      className="card-img-right img-fluid rounded-3"
                      alt=""
                      style={{
                        height: isLargeScreen ? "230px" : "auto",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title className="text-primary-emphasis fw-bold">
                        Ravindra Jadeja, the quick and the deadly
                      </Card.Title>

                      <Card.Text>
                        This is a bunch of words. Fair warning, they aren't
                        particularly concerned with making sense. They could try
                        but at this point they aren't quite bothered. They are
                        just placeholders. Actually, they're a gimmick. It's
                        ham-fisted, as they can be occasionally but that doesn't
                        preclude them ....
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Row className="g-0">
                <Col>
                  <Card className="border-0">
                    <Row className="g-0">
                      <Col lg={5}>
                        <img
                          src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1451522_1296x729.jpg&w=476&h=266&scale=crop&cquality=40&location=center"
                          className="card-img-right img-fluid rounded-3"
                          alt=""
                          style={{
                            height: isLargeScreen ? "130px" : "auto",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Col>
                      <Col>
                        <div className="card-body mt-lg-0 pt-lg-0">
                          <h6 className="card-title my-0 pb-1">
                            Ravindra Jadeja, the quick and the deadly
                          </h6>
                          <small className="card-text mt-0 pt-0">
                            This is a bunch of words. Fair warning, they aren't
                            particularly concerned with making sense.
                          </small>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card className="border-0">
                    <Row className="g-0">
                      <Col lg={5}>
                        <img
                          src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1452490_1296x729.jpg&w=476&h=266&scale=crop&cquality=40&location=center"
                          className="card-img-right img-fluid rounded-3"
                          alt=""
                          style={{
                            height: isLargeScreen ? "130px" : "auto",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Col>
                      <Col>
                        <div className="card-body mt-lg-0 pt-lg-0">
                          <h6 className="card-title my-0 pb-1">
                            Ravindra Jadeja, the quick and the deadly
                          </h6>
                          <small className="card-text mt-0 pt-0">
                            This is a bunch of words. Fair warning, they aren't
                            particularly concerned with making sense.
                          </small>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <Row className="g-0 pt-3">
                <Col>
                  <Card className="border-0">
                    <Row className="g-0">
                      <Col lg={5}>
                        <img
                          src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1425228_1296x729.jpg&w=476&h=266&scale=crop&cquality=40&location=center"
                          className="card-img-right img-fluid rounded-3"
                          alt=""
                          style={{
                            height: isLargeScreen ? "130px" : "auto",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Col>
                      <Col>
                        <div className="card-body mt-lg-0 pt-lg-0">
                          <h6 className="card-title my-0 pb-1">
                            Ravindra Jadeja, the quick and the deadly
                          </h6>
                          <small className="card-text mt-0 pt-0">
                            This is a bunch of words. Fair warning, they aren't
                            particularly concerned with making sense.
                          </small>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card className="border-0">
                    <Row className="g-0">
                      <Col lg={5}>
                        <img
                          src="https://a.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1452398_1296x729.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg"
                          className="card-img-right img-fluid rounded-3"
                          alt=""
                          style={{
                            height: isLargeScreen ? "130px" : "auto",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Col>
                      <Col>
                        <div className="card-body mt-lg-0 pt-lg-0">
                          <h6 className="card-title my-0 pb-1">
                            Ravindra Jadeja, the quick and the deadly
                          </h6>
                          <small className="card-text mt-0 pt-0">
                            This is a bunch of words. Fair warning, they aren't
                            particularly concerned with making sense.
                          </small>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
  };

  return (
    <>
      <NavBar />
      <SportsNavBar />
      <section style={{ backgroundColor: "#e6e7ea" }}>
        <Container fluid>
          {/* Sub-Navbar for Cricket Page */}
          <Row>
            <Col lg={9} className="border-bottom">
              <Nav className="bg-white mt-3" activeKey={activeSection}>
                <Nav.Item>
                  <Nav.Link onClick={() => setActiveSection("home")}>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => setActiveSection("ipl")}>
                    IPL
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => setActiveSection("scores")}>
                    Scores
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => setActiveSection("series")}>
                    Series
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

          {/* Render the section based on the active state */}
          <Row>
            <Col lg={9}>{renderSection()}</Col>
            <Col lg={3}>
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cricket;
