import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Immigiration = () => {
  const isLargeScreen = window.innerWidth >= 992; // Example for screen size handling
  const [tech, setTech] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const response = await fetch(
          "https://www.bharatabroad.com/api/immigration"
        ); // Ensure this is the correct endpoint
        const data = await response.json();

        if (Array.isArray(data)) {
          // Sort the filtered data in descending order of `id`
          const sortedData = data.sort((a, b) => b.id - a.id);

          setTech(sortedData); // Update state with the sorted data
        } else {
          console.error("Fetched data is not an array");
        }
      } catch (error) {
        console.error("Error fetching tech:", error);
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    fetchTech();
  }, []);

  // Split the sorted data into top 4 and remaining
  const topPicks = tech.slice(0, 4); // Last 4 items
  const remainingTech = tech.slice(4); // Remaining items
  return (
    <div>
      <NavBar />
      <div>
        {/* Top Picks Section */}
        <section className="mt-2 ">
          <Container fluid>
            <Row className="py-1">
              <Col xs={12} className="px-2">
                <h4 className="fw-bolder ">Top Picks</h4>
              </Col>

              {/* Display the first item separately */}
              <Col
                style={{ backgroundColor: "#ffffff" }}
                className="p-2"
                xs={{ order: 1 }}
              >
                {topPicks.length > 0 && (
                  <NavLink
                    as={Link}
                    to={`/immigration-details/${topPicks[0].id}`}
                    className=""
                    key={topPicks[0].id}
                  >
                    <div className="card border-0">
                      <img
                        src={topPicks[0].IM_Image}
                        className="card-img-top"
                        alt={topPicks[0].IM_Title}
                      />
                      <div className="card-body px-0">
                        <h6 className="text-primary-emphasis fw-bold">
                          {topPicks[0].IM_Title}
                        </h6>
                        <p className="card-title fw-500">
                          {topPicks[0].IM_Lead}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                )}
              </Col>

              {/* Map through the remaining items, starting from index 1 */}
              <Col
                xs={{ order: 2 }}
                md={12}
                lg={6}
                style={{ backgroundColor: "#ffffff" }}
                className="p-2"
              >
                {topPicks.slice(1).map((item) => (
                  <NavLink
                    as={Link}
                    to={`/news/${item.id}`}
                    className="mt-2 mb-3"
                    key={item.id}
                  >
                    <div className="card border-0 rounded-0">
                      <div className="row g-0">
                        <div className="col-xs-12 col-lg-5">
                          <img
                            src={item.IM_Image}
                            className="card-img-right img-fluid rounded-3 mb-3"
                            alt={item.IM_Title}
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
                              <span>{item.IM_Title}</span>
                            </p>
                            <p
                              className="card-title fw-500"
                              style={{ fontSize: "14px" }}
                            >
                              {item.IM_Lead}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </Col>
            </Row>
          </Container>
        </section>

        {/* Remaining Tech Section */}
        <section>
          <Container fluid>
            <Row>
              <Col xs={12} className="mb-3">
                <h4 className="fw-bold border-bottom pb-2">
                  Immigration Policies
                </h4>
              </Col>
              <Col lg={9}>
                <Row className="g-2">
                  {/* Single country card */}
                  {[
                    {
                      name: "India",
                      flag:
                        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
                      route: "/immigiration/India",
                    },
                    {
                      name: "USA",
                      flag:
                        "https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg",
                      route: "/immigiration/usa",
                    },
                    {
                      name: "Japan",
                      flag:
                        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
                      route: "/immigiration/japan",
                    },
                    {
                      name: "Australia",
                      flag:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png",
                      route: "/immigiration/australia",
                    },
                    {
                      name: "UK",
                      flag:
                        "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
                      route: "/immigiration/uk",
                    },
                    {
                      name: "Canada",
                      flag:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png",
                      route: "/immigiration/canada",
                    },
                    {
                      name: "Germany",
                      flag:
                        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
                      route: "/immigiration/germany",
                    },
                    {
                      name: "Sweden",
                      flag:
                        "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
                      route: "/immigiration/sweden",
                    },
                    {
                      name: "New Zealand",
                      flag:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaMYVM3TLnLYb-vsiLznwq7XEse8rh0qOs9okmGyYJdbqDDk_W3Qc4Gmx9vw8&s=10",
                      route: "/immigiration/NewZealand",
                    },
                    {
                      name: "Netherlands",
                      flag:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cMRZC5C541STWUJheF8YljaAh1EGUocuGEKGY_Qd_28qlemkuV1a6hzZp2rQ&s=10",
                      route: "/immigiration/Netherlands",
                    },
                    {
                      name: "Switzerland",
                      flag:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrW1Fv12iPVXb0L2XUFa4jrsGU2SzvpGwew&s",
                      route: "/immigiration/Switzerland",
                    },
                  ].map((country, index) => (
                    <Col lg={4} key={index}>
                      <NavLink
                        as="Link"
                        to={country.route}
                        className="text-dark text-decoration-none"
                      >
                        <div className="d-flex align-items-center p-2 border rounded shadow-sm bg-light hover-effect">
                          <img
                            src={country.flag}
                            alt={`${country.name} flag`}
                            className="img-fluid me-2"
                            style={{
                              height: "40px",
                              maxWidth: "60px",
                              objectFit: "cover",
                              borderRadius: "5px",
                            }}
                          />
                          {country.route ? (
                            <h6 className="mb-0 fw-bold">{country.name}</h6>
                          ) : (
                            <h6 className="mb-0 fw-bold">{country.name}</h6>
                          )}
                        </div>
                      </NavLink>
                    </Col>
                  ))}
                </Row>
              </Col>

              {/* Advertisement section */}
              <Col lg={3} md={3} className="mt-4 mt-lg-0">
                <div className="p-3 pt-0 text-center">
                  <small className="text-muted">Advertisement</small>

                  <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                    <Image
                      className="img-fluid border"
                      src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Maroon+traditional+Minimal+Guru+Purnima+Greeting+Instagram+Post.gif"
                      alt="Ad 2"
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Immigiration;
