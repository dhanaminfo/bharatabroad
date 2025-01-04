import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";

const Auto = () => {
  const isLargeScreen = window.innerWidth >= 992; // Screen size handling
  const [loading] = useState(false); // No API call, so no loading state
  const autoData = [
    {
      id: 1,
      TH_Title:
        "With new Dzire, Maruti Suzuki looks to retain grip on compact sedan segment",
      TH_Lead:
        "The Maruti Suzuki Dzire rivals the Honda Amaze, Hyundai Aura and Tata Tigor.",
      TH_Image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/maruti-suzuki-dzire-255406728-16x9_0.jpg?VersionId=BdIlOIs1sniroNkUR_6dTBq_S79DGTPP&size=690:388",
      BA_Category: "SUV",
      TH_Date: "2024-11-01",
    },
    {
      id: 2,
      TH_Title:
        "Dual cylinder tech propels CNG share to record high in Hyundai's domestic volume",
      TH_Lead:
        "Hyundai offers the Hy-CNG Duo technology in the Grand i10 Nios and the Exter.",
      TH_Image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/hyundai-dual-cng-244929240-16x9_0.jpg?VersionId=0Sncu019TLukbjBfNPEYtrqvj8C26Nsy&size=690:388",
      BA_Category: "Sedan",
      TH_Date: "2024-11-10",
    },
    {
      id: 3,
      TH_Title:
        "Royal Enfield Goan Classic 350 launched in India at Rs 2.35 lakh",
      TH_Lead:
        "The bobber-inspired Goan Classic 350 is built on the same frame as the company's best-selling Classic 350.",
      TH_Image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/goan-classic-350-242834250-16x9_0.jpg?VersionId=NoR0vwIzf9wrOG_d.FeCYlZ1FBwXoRcX&size=690:388",
      BA_Category: "Hatchback",
      TH_Date: "2024-11-15",
    },
    {
      id: 4,
      TH_Title:
        "Maruti, Hyundai models dominate online motor insurance space as WagonR, Swift, i20 lead",
      TH_Lead:
        "Majority of online motor insurance buyers are between 25 and 40 years of age.",
      TH_Image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/maruti-suzuki-swift-224422873-16x9_0.jpg?VersionId=E_8ZKuCEk6DM5gankL92I0FihUXsgnjJ&size=690:388",
      BA_Category: "Sports Car",
      TH_Date: "2024-11-20",
    },
    {
      id: 5,
      TH_Title:
        "Huge offers on Virtus, City, Slavia, Verna, Ciaz mid-sedans as sales plummet",
      TH_Lead:
        "The mid-size sedan segment in India includes models like the Volkswagen Virtus, Hyundai Verna, Honda City, Skoda Slavia and Maruti Suzuki Ciaz.",
      TH_Image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/volkswagen-virtus-222314382-16x9_0.jpg?VersionId=SE7AKr78Blst_KgvmvkeFlc8IoLzFjAH&size=690:388",
      BA_Category: "Convertible",
      TH_Date: "2024-11-25",
    },
  ];

  // Split data for top picks and remaining
  const topPicks = autoData.slice(0, 4); // First 4 items
  const remainingAuto = autoData.slice(4); // Remaining items

  return (
    <div>
      <Helmet></Helmet>
      <div>
        {/* Top Picks Section */}
        <section className="my-2">
          <Container fluid>
            <Row className="py-2">
              <Col xs={12} className="px-2">
                <h4 className="fw-bolder">Top Picks</h4>
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
                    to={`/auto/${topPicks[0].id}`}
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

              {/* Map through the remaining top picks */}
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
                    to={`/auto/${item.id}`}
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

        {/* Remaining Auto Section */}
        <section>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <h5 className="fw-bold mt-2 py-2">Latest Automobiles</h5>
              </Col>
              <Col lg={9}>
                {loading ? (
                  <Col lg={9}>
                    <p>Loading automobiles...</p>
                  </Col>
                ) : (
                  remainingAuto.map((item) => (
                    <React.Fragment key={item.id}>
                      <NavLink as={Link} to={`/auto/${item.id}`}>
                        <Row>
                          <Col md={4}>
                            <div className="text-start">
                              <img
                                src={item.TH_Image}
                                alt={item.TH_Title}
                                className="img-fluid my-3 me-3 pe-2"
                              />
                            </div>
                          </Col>
                          <Col md={8}>
                            <h6 className="text-danger mt-3">
                              {item.BA_Category}
                              <small
                                style={{
                                  fontSize: "10px",
                                }}
                              >
                                {" "}
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
                          </Col>
                        </Row>
                      </NavLink>
                      <hr />
                    </React.Fragment>
                  ))
                )}
              </Col>

              {/* Advertisement Section */}
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
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Auto;
