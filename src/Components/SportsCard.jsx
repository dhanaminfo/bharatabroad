import React, { useEffect, useState } from "react";
import { Col, Container, Image, NavLink, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useGeoLocation } from "../Components/GeoLocation";
import { useFlag } from "../Components/FlagContext";

const Sportscard = () => {
  const [sports, setSports] = useState([]);
  const { country } = useGeoLocation();
  const { selectedFlag } = useFlag();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://www.bharatabroad.com/api/sports";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch sports");
        }
        const sportData = await response.json();
        // Log the fetched data to the console
        console.log("Fetched data:", sportData);
        const sortedsports = sportData.sort((a, b) => {
          if (selectedFlag) {
            if (a.country === selectedFlag) return -1;
            else if (b.country === selectedFlag) return 1;
          } else {
            if (a.country === country) return -1;
            else if (b.country === country) return 1;
          }
          return 0;
        });

        // Filter the sorted sports where BA_Priority is 10
        const filteredsports = sortedsports.filter(
          (sport) => sport.BA_Priority === 10
        );

        // Update the sports state with the filtered data
        setSports(filteredsports);
      } catch (error) {
        console.error("Error fetching sports:", error);
        // Handle error state or display an error message
      }
    };

    fetchData();
  }, [country, selectedFlag]);

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (!text) return ""; // Check if text is null or undefined

    return text.length > maxLength ? text.substr(0, maxLength) + "..." : text;
  };

  return (
    <>
      {/* Mobile: Display */}
      <section style={{ backgroundColor: "#e6e7ea" }} className="d-md-none">
        <Container fluid className="py-2">
          <Row className="g-0">
            <Col sm={12}>
              <h4 className="pt-3 ms-2 fw-bolder">Trending sports</h4>
              <div className="d-flex mt-3 flex-wrap">
                {sports.map((sport) => (
                  <>
                    <NavLink as={Link} to={`sports/${sport.id}`}>
                      <div
                        className="card mb-3 ms-2 border-white rounded-0 bg-opacity-10 me-3"
                        key={sport.id}
                        style={{ maxWidth: "970px" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={sport.SP_Image}
                              className="img-fluid p-2"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h6 className="card-title">{sport.SP_Title}</h6>
                              <small className="card-text text-muted">
                                {sport.SP_Lead}
                              </small>
                              <div className="row g-0">
                                <div className="col">
                                  <div>
                                    <small className="text-primary">
                                      {sport.SP_Country}
                                    </small>
                                  </div>
                                </div>
                                <div className="col text-end">
                                  <Link
                                    to={`sports/${sport.id}`}
                                    className="btn btn-dark btn-sm"
                                  >
                                    Read More
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </>
                ))}
              </div>
              <div className="text-center">
                <small className="text-muted">Advertisement</small>
                <div className="row g-0">
                  <div className="text-center">
                    <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                      <Image
                        className="mx-auto d-block mb-2 border"
                        src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Maroon+traditional+Minimal+Guru+Purnima+Greeting+Instagram+Post+(2).gif"
                        height={"250px"}
                        width={"300px"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tab: Display */}
      <section
        style={{ backgroundColor: "#e6e7ea" }}
        className="d-none d-md-flex d-lg-none"
      >
        <Container fluid className="py-2">
          <Row className="g-0">
            <Col md={12}>
              <h4 className="py-3 ms-2 fw-bolder">Trending sports</h4>

              <Row className="g-3 m-1">
                {sports.map((sport, index) => (
                  <React.Fragment key={sport.id}>
                    <Col md={6} className="">
                      <NavLink as={Link} to={`sports/${sport.id}`}>
                        <div
                          className="card border-0 rounded-0"
                          key={sports.id}
                        >
                          <div className="row g-0">
                            <div className="col-5">
                              <img
                                src={sport.SP_Image}
                                className="card-img-right img-fluid rounded-0"
                                alt="sport"
                                style={{ height: "125px", width: "100%" }}
                              />
                            </div>
                            <div className="col-7 p-0">
                              <div className="card-body bg-transparent">
                                <small
                                  className="text-primary-emphasis fw-bold"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="text-primary text-uppercase">
                                    {sport.SP_Country}
                                  </span>{" "}
                                  - {sport.date}
                                </small>
                                <p
                                  className="card-title fw-bold"
                                  style={{ fontSize: "14px" }}
                                >
                                  {truncateText(`${sport.SP_Title}`, 80)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </Col>
                    {/* Render advertisement card after every 3rd sport */}
                  </React.Fragment>
                ))}

                <div
                  className="card border-0 rounded-0 text-center"
                  style={{ maxWidth: "970px" }}
                >
                  <small className="  text-muted">Advertisement</small>
                  <div className="row g-0">
                    <div className="col-md-12 text-center pe-3">
                      <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                        <img
                          src="https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0057.jpg"
                          className="img-fluid pb-2 "
                          alt="..."
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Desktop: Display */}
      <section
        style={{ backgroundColor: "#e6e7ea" }}
        className="d-none d-lg-block"
      >
        <Row className="g-0">
          <Col lg={12}>
            <h5 className="pt-3 fw-bolder">Trending Sports</h5>

            <Row className="g-0 pe-2">
              {sports.map((sport) => (
                <React.Fragment key={sport.id}>
                  <Col lg={6} className="">
                    <NavLink as={Link} to={`sports/${sport.id}`}>
                      <div
                        className="card border-1 rounded-0"
                        style={{
                          backgroundColor: "#fafbfc",
                          // boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-5 p-1">
                            <img
                              src={sport.SP_Image}
                              className="card-img-right img-fluid rounded-0"
                              alt="sport"
                              style={{ height: "125px", width: "100%" }}
                            />
                          </div>
                          <div className="col-7 p-0">
                            <div className="card-body pt-1">
                              <small
                                className="text-primary-emphasis fw-bold"
                                style={{ fontSize: "12px" }}
                              >
                                <span className="text-primary text-uppercase">
                                  {sport.SP_Country}
                                </span>{" "}
                                {/* - {sport.SP_StartDate} */}
                              </small>
                              <p
                                className="card-title fw-bold"
                                style={{ fontSize: "14px" }}
                              >
                                {truncateText(sport.SP_Title, 50)}
                              </p>
                              <p
                                className="card-text"
                                style={{ fontSize: "12px" }}
                              >
                                {truncateText(sport.SP_Description, 60)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </Col>
                </React.Fragment>
              ))}
            </Row>
            <div className="text-center py-4">
              <h6 style={{ fontSize: "11px" }}>ADVERTISEMENT</h6>
              <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                <img
                  src="https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0057.jpg"
                  alt=""
                  className=""
                />
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Sportscard;
