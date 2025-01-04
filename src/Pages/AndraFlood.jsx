import React from "react";
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";
import img1 from "../Images/AF-1.jpeg";
import img2 from "../Images/AF-2.jpg";
import img3 from "../Images/AF-3.jpg";
import img4 from "../Images/AF-4.webp";
import img5 from "../Images/AF-5.jpg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const AndraFlood = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 992px)" });
  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (!text) return ""; // Check if text is null or undefined

    return text.length > maxLength ? text.substr(0, maxLength) + "..." : text;
  };
  return (
    <div>
      <Container fluid className="mb-3">
        <Row className="p-2">
          <Col className="border pt-2" lg={4}>
            <NavLink as={Link} to={`/andhrapradesh-flood-sep-1-2`}>
              <Card className="border-0">
                <Card.Img variant="top" src={img1} />
                <Card.Body className="px-0">
                  <Card.Title
                    className="text-primary-emphasis fw-bold"
                    style={{ fontSize: "14px" }}
                  >
                    Andhra Pradesh leading to floods, the State is expected to
                    receive some respite from September 2.
                  </Card.Title>
                  <Card.Text className="text-" style={{ fontSize: "12px" }}>
                    {truncateText(
                      "Krishna river flood water entered houses at Chinthala Katta near Vijayawada on Sunday",
                      50
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>

          <Col className="border pt-2" lg={4}>
            <div className="card border-0 rounded-0">
              <NavLink as={Link} to={`/andhrapradesh-flood-sep-1-2`}>
                <div className="row g-0">
                  <div className="col-xs-12 col-lg-5">
                    <img
                      src={img2}
                      className="card-img-right img-fluid rounded-3"
                      alt=""
                      style={{
                        height: isLargeScreen ? "130px" : "auto",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-xs-12 col-lg-7 p-0">
                    <div className="card-body px-0 px-lg-2 pt-0 mt-0">
                      <p
                        className="text-primary-emphasis fw-bold mb-0"
                        style={{ fontSize: "13px" }}
                      >
                        <span>
                          Heavy rains in Telangana, Andhra, 21 trains cancelled,
                          10 diverted
                        </span>
                      </p>
                      <p
                        className="card-title fw-500"
                        style={{ fontSize: "14px" }}
                      >
                        {" "}
                        {truncateText(
                          "South Central Railway (SCR) has cancelled 21 more trains and diverted 10 others due to waterlogging over tracks at several locations",
                          65
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="card border-0 rounded-0">
              <NavLink as={Link} to={`/andhrapradesh-flood-sep-1-2`}>
                <div className="row g-0">
                  <div className="col-xs-12 col-lg-5">
                    <img
                      src={img4}
                      className="card-img-right img-fluid rounded-3"
                      alt=""
                      style={{
                        height: isLargeScreen ? "130px" : "auto",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-xs-12 col-lg-7 p-0">
                    <div className="card-body px-0 px-lg-2 pt-0 mt-0">
                      <p
                        className="text-primary-emphasis fw-bold mb-0"
                        style={{ fontSize: "13px" }}
                      >
                        <span>
                          Several Universities in Telangana postpone exams
                          scheduled on Monday
                        </span>
                      </p>
                      <p
                        className="card-title fw-500"
                        style={{ fontSize: "14px" }}
                      >
                        {" "}
                        {truncateText(
                          "Government’s direction in declaring Monday a holiday for all government and private educational institutions, various examinations too stand postponed.",
                          65
                        )}
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </NavLink>
            </div>
          </Col>
          <Col className="border pt-2" lg={4}>
            <div className="card border-0 rounded-0">
              <NavLink as={Link} to={`/andhrapradesh-flood-sep-1-2`}>
                <div className="row g-0">
                  <div className="col-xs-12 col-lg-5">
                    <img
                      src={img3}
                      className="card-img-right img-fluid rounded-3"
                      alt=""
                      style={{
                        height: isLargeScreen ? "130px" : "auto",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-xs-12 col-lg-7 p-0">
                    <div className="card-body px-0 px-lg-2 pt-0 mt-0">
                      <p
                        className="text-primary-emphasis fw-bold mb-0"
                        style={{ fontSize: "13px" }}
                      >
                        <span>
                          {truncateText(
                            "Andhra CM Naidu inspects flood-affected areas",
                            50
                          )}
                        </span>
                      </p>
                      <p
                        className="card-title fw-500"
                        style={{ fontSize: "14px" }}
                      >
                        {" "}
                        {truncateText(
                          "Chief Minister Chandrababu Babu Naidu meets flood-hit people durig his visit to flood-affected areas.",
                          65
                        )}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="card border-0 rounded-0">
              <NavLink as={Link} to={`/andhrapradesh-flood-sep-1-2`}>
                <div className="row g-0">
                  <div className="col-xs-12 col-lg-5">
                    <img
                      src={img5}
                      className="card-img-right img-fluid rounded-3"
                      alt=""
                      style={{
                        height: isLargeScreen ? "130px" : "auto",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-xs-12 col-lg-7 p-0">
                    <div className="card-body px-0 px-lg-2 pt-0 mt-0">
                      <p
                        className="text-primary-emphasis fw-bold mb-0"
                        style={{ fontSize: "13px" }}
                      >
                        <span>
                          Andhra receives power boats from Centre for flood
                          relief operations in Vijayawada
                        </span>
                      </p>
                      <p
                        className="card-title fw-500"
                        style={{ fontSize: "14px" }}
                      >
                        {" "}
                        {truncateText(
                          "The Andhra Pradesh government has received power boats from the Centre to assist in flood relief operations in Vijayawada, following unprecedented rainfall and flooding.",
                          65
                        )}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AndraFlood;
