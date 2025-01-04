import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Col, Image, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";

const SportsDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://s0.2mdn.net/simgad/8641236911096311407",
    "https://tpc.googlesyndication.com/simgad/11881701891935889806",
    "https://tpc.googlesyndication.com/simgad/7076629710210172092",
    "https://tpc.googlesyndication.com/simgad/18192291198114234065",
    "https://tpc.googlesyndication.com/simgad/7064950786490639758",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  });

  const { id } = useParams();
  const [Sport, setSport] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://www.bharatabroad.com/api/sports";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch sport data");
        }
        const sportData = await response.json();

        // Filter sports to find the one with the matching id
        const foundsport = sportData.find((sport) => sport.id === parseInt(id));

        if (foundsport) {
          setSport(foundsport);
          console.log("sport found:", foundsport);
        } else {
          console.log(`No sport found with id: ${id}`);
        }
      } catch (error) {
        console.error("Error fetching sport:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <NavBar />
      {/* Mobile: Display */}
      <section className="d-md-none">
        <Row className="py-3 g-0">
          <Col lg={9}>
            <section style={{ backgroundColor: "#f4f4f6" }}>
              <div className="text-center pt-1">
                <h6 style={{ fontSize: "11px" }}>ADVERTISEMENT</h6>
                <img
                  src="https://s0.2mdn.net/simgad/6463644956967963792"
                  alt=""
                  height={"250px"}
                  width={"300px"}
                  className=""
                />
              </div>
            </section>

            <Container>
              <div className="mt-3">
                <h2 className=" fw-bold">{Sport.SP_Title}</h2>
                <small className=" fw-bold">
                  <span className="text-primary">{Sport.SP_Country} </span>
                  {Sport.SP_StartDate} {Sport.time}
                </small>

                <hr />
              </div>
              <div className="text-center">
                <Row>
                  <Col lg={7}>
                    <div className="">
                      <img
                        src={Sport.SP_Image}
                        className="img-fluid"
                        alt="..."
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <hr />
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="mt-3 text-secondary-emphasis">
                    <h4 className="fw-bold text-dark">Sport Details</h4>
                    <p className="mt-2" style={{ textAlign: "justify" }}>
                      {Sport.SP_Lead}
                    </p>
                    <p className="mt-2" style={{ textAlign: "justify" }}>
                      {Sport.SP_Description}
                    </p>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="mt-3">
                    <h4 className="fw-bold text-dark">Organizer</h4>
                    <p className="mt-2 fw-200">{Sport.SP_Organizers}</p>
                    <hr />
                    <h4 className="fw-bold text-dark">Location</h4>
                    <p className="mt-2 ">
                      {Sport.SP_VenueName},{Sport.SP_City},{Sport.SP_State},
                      {Sport.SP_Country}
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col
            lg={3}
            className="text-center pt-3"
            style={{ backgroundColor: "#f4f4f6" }}
          >
            <div>
              <h6 style={{ fontSize: "11px" }}>ADVERTISEMENT</h6>
              <img
                src="https://s0.2mdn.net/simgad/6463644956967963792"
                alt=""
                height={"250px"}
                width={"300px"}
                className="mb-2"
              />

              <img
                src="https://s0.2mdn.net/simgad/6463644956967963792"
                alt=""
                height={"250px"}
                width={"300px"}
                className=""
              />
            </div>
          </Col>
        </Row>
      </section>

      {/* Tab: Display */}
      <section className="d-none d-md-flex d-lg-none">
        <Row className="py-3 g-0">
          <Col md={12}>
            <div
              className="text-center py-4"
              style={{ backgroundColor: "#f4f4f6" }}
            >
              <h6 style={{ fontSize: "11px" }}>ADVERTISEMENT</h6>
              <img
                src="https://tpc.googlesyndication.com/simgad/11391521469302548625"
                alt=""
                className=""
              />
            </div>
          </Col>
          <Container>
            <div className="mt-3">
              <h2 className=" fw-bold">{Sport.SP_Title}</h2>
              <small className=" fw-bold">
                <span className="text-primary">{Sport.SP_Country} </span>
                {Sport.SP_StartDate} {Sport.time}
              </small>

              <hr />
            </div>
            <div className="text-center">
              <Row>
                <Col>
                  <div className="">
                    <img src={Sport.SP_Image} className="img-fluid" alt="..." />
                  </div>
                </Col>
              </Row>
            </div>
            <hr />
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className="mt-3 text-secondary-emphasis">
                  <h4 className="fw-bold text-dark">Sport Details</h4>
                  <p className="mt-2" style={{ textAlign: "justify" }}>
                    {Sport.SP_Lead}
                  </p>
                  <p className="mt-2" style={{ textAlign: "justify" }}>
                    {Sport.SP_Description}
                  </p>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className="mt-3">
                  <h4 className="fw-bold text-dark">Organizer</h4>
                  <p className="mt-2 fw-200">{Sport.SP_Organizers}</p>
                  <hr />
                  <h4 className="fw-bold text-dark">Location</h4>
                  <p className="mt-2 ">
                    {Sport.SP_VenueName},{Sport.SP_City},{Sport.SP_State},
                    {Sport.SP_Country}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <section className="" style={{ backgroundColor: "#f4f4f6" }}>
            <Container className="py-2 text-center">
              <h6 style={{ fontSize: "11px" }}>ADVERTISEMENT</h6>
              <img
                src="https://s0.2mdn.net/simgad/6463644956967963792"
                alt=""
                height={"250px"}
                width={"300px"}
                className=""
              />
              <img
                src="https://s0.2mdn.net/simgad/6463644956967963792"
                alt=""
                height={"250px"}
                width={"300px"}
                className=""
              />
            </Container>
          </section>
        </Row>
      </section>

      {/* Desktop: Display */}
      <section className="d-none d-lg-flex container py-2">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <div className="mt-3">
                <h2 className=" fw-bold">{Sport.SP_Title}</h2>
                <p className="mb-1">
                  {Sport.SP_VenueName},{Sport.SP_City},{Sport.SP_State},
                  {Sport.SP_Country}
                </p>
                <small className="text-primary fw-bold">
                  {Sport.SP_StartDate} - {Sport.time}
                </small>
                <hr />
              </div>
            </Col>
            <Col lg={8}>
              <div className="">
                <img src={Sport.SP_Image} className="img-fluid" alt="..." />
              </div>
              <hr />
              <div
                className=" text-secondary-emphasis"
                style={{ height: "220px", overflowY: "scroll" }}
              >
                {/* <h4 className="fw-bold text-dark">Sport Details</h4> */}
                <p className="fw-bold pe-2" style={{ textAlign: "justify" }}>
                  {Sport.SP_Lead}
                </p>
                <p className="pe-2" style={{ textAlign: "justify" }}>
                  {Sport.SP_Description}
                </p>
              </div>
            </Col>
            <Col
              lg={4}
              className="text-center pt-3"
              style={{ backgroundColor: "#f4f4f6" }}
            >
              <div>
                <h6 style={{ fontSize: "11px" }}>ADVERTISEMENT</h6>
                <img
                  src="https://tpc.googlesyndication.com/simgad/17212782866304251776"
                  alt=""
                  height={"600px"}
                  width={"300px"}
                  className="mb-2"
                />
              </div>
            </Col>
            <hr />
            <Col
              lg={12}
              className="text-center py-3"
              style={{ backgroundColor: "#f4f4f6" }}
            >
              <h6 style={{ fontSize: "11px" }}>ADVERTISEMENT</h6>
              <img
                src="https://tpc.googlesyndication.com/simgad/13173894910014374707"
                width={"970px"}
                height={"90px"}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SportsDetail;
