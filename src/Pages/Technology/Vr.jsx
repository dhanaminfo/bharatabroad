import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";

const Vr = () => {
  const isLargeScreen = window.innerWidth >= 992; // Example for screen size handling
  const [tech, setTech] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const response = await fetch("https://www.bharatabroad.com/api/tech"); // Ensure this is the correct endpoint
        const data = await response.json();

        if (Array.isArray(data)) {
          // Filter the data for entries with TH_Page equal to "AI"
          const filteredData = data.filter((item) => item.TH_Page === "VR");

          // Sort the filtered data in descending order of `id`
          const sortedData = filteredData.sort((a, b) => b.id - a.id);

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
      <Helmet></Helmet>
      <div>
        {/* Top Picks Section */}
        <section className="my-2">
          <Container fluid>
            <Row className="py-2">
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
                    to={`/news/${topPicks[0].id}`}
                    className=""
                    key={topPicks[0].id}
                  >
                    <div className="card border-0">
                      <img
                        src={topPicks[0].TH_Image}
                        className="card-img-top"
                        alt={topPicks[0].TH_Title}
                      />
                      <div className="card-body px-0">
                        <h5 className="text-primary-emphasis fw-bold">
                          {topPicks[0].TH_Title}
                        </h5>
                        <p className="card-title fw-500">
                          {topPicks[0].TH_Lead}
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
                            src={item.TH_Image}
                            className="card-img-right img-fluid rounded-3 mb-3"
                            alt={item.TH_Title}
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
                              <span>{item.TH_Title}</span>
                            </p>
                            <p
                              className="card-title fw-500"
                              style={{ fontSize: "14px" }}
                            >
                              {item.TH_Lead}
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
              <Col xs={12}>
                <h5 className="fw-bold mt-2 py-2">Machine Learning</h5>
              </Col>
              <Col lg={9}>
                {loading ? (
                  <Col lg={9}>
                    <p>Loading tech...</p>
                  </Col>
                ) : (
                  remainingTech.map((item) => (
                    <React.Fragment key={item.id}>
                      <NavLink as={Link} to={`/tech-details/${item.id}`}>
                        <Row>
                          <Col md={4}>
                            <div className="text-start">
                              <div>
                                <img
                                  src={item.TH_Image}
                                  alt={item.TH_Title}
                                  className="img-fluid my-3 me-3 pe-2"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col md={8}>
                            <h6 className="text-danger mt-3 ">
                              {item.BA_Category}{" "}
                              <small
                                style={{
                                  fontSize: "10px",
                                }}
                              >
                                <span className="text-dark">2 MIN READ</span>
                              </small>
                            </h6>

                            <h6 className="fw-bold mb-1">{item.TH_Title}</h6>

                            <small
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              {item.TH_Date}
                            </small>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "14px",
                              }}
                            >
                              {item.TH_Lead}
                            </p>
                            <small className="">
                              By{" "}
                              <span className="fw-bold">
                                {item.TH_AuthorName}
                              </span>
                            </small>
                          </Col>
                        </Row>
                      </NavLink>
                      <hr />
                    </React.Fragment>
                  ))
                )}
              </Col>

              <Col lg={3} md={3}>
                <div className="d-flex justify-content-center">
                  <small>Advertisement</small>
                </div>
                <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                  <Image
                    className="mx-auto d-block pt-2"
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
    </div>
  );
};

export default Vr;
