import React, { useEffect, useState } from "react";
import { Col, Container, Image, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGeoLocation } from "../Components/GeoLocation";
import { useFlag } from "../Components/FlagContext";
import NavBar from "../Components/NavBar";

const Events = () => {
  const [events, setEvents] = useState([]);
  const { country } = useGeoLocation();
  const { selectedFlag } = useFlag();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = "https://www.bharatabroad.com/api/events/data";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const eventData = await response.json();

        // Sort eventData
        const sortedEvents = eventData.sort((a, b) => {
          if (selectedFlag) {
            // Sort by selectedFlag if it has a value
            if (a.EV_Country === selectedFlag && b.EV_Country !== selectedFlag)
              return -1;
            if (b.EV_Country === selectedFlag && a.EV_Country !== selectedFlag)
              return 1;
          } else {
            // Sort by geolocation country if selectedFlag is not set
            if (a.EV_Country === country && b.EV_Country !== country) return -1;
            if (b.EV_Country === country && a.EV_Country !== country) return 1;
          }
          return 0;
        });

        setEvents(sortedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle error state or display an error message
      } finally {
        setLoading(false);
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
      <NavBar />
      {/* Mobile: Display */}
      <section style={{ backgroundColor: "#e6e7ea" }} className="d-md-none">
        <Container fluid className="py-2">
          <Row className="g-0">
            <Col sm={12}>
              <h4 className="pt-3 ms-2 fw-bolder">Trending Events</h4>
              <div className="d-flex mt-3 flex-wrap">
                {events.slice(0, 8).map((event) => (
                  <>
                    <NavLink as={Link} to={`${event.id}`}>
                      <div
                        className="card mb-3 ms-2 border-white rounded-0 bg-opacity-10 me-3"
                        key={event.id}
                        style={{ maxWidth: "970px" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={event.EV_Image}
                              className="img-fluid p-2"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h6 className="card-title">{event.EV_Title}</h6>
                              <small className="card-text text-muted">
                                {event.EV_Lead}
                              </small>
                              <div className="row g-0">
                                <div className="col">
                                  <div>
                                    <small className="text-muted">
                                      {event.EV_Date}
                                    </small>{" "}
                                    | {""}
                                    <small className="text-primary">
                                      {event.EV_Country}
                                    </small>
                                  </div>
                                </div>
                                {/* <div className="col text-end">
                                  <Link
                                    to={`${event.id}`}
                                    className="btn btn-dark btn-sm"
                                  >
                                    Read More
                                  </Link>
                                </div> */}
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
                        src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Maroon+traditional+Minimal+Guru+Purnima+Greeting+Instagram+Post.gif"
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
              <h4 className="py-3 ms-2 fw-bolder">Trending Events</h4>

              <Row className="g-3 m-1">
                {events.slice(0, 6).map((event, index) => (
                  <React.Fragment key={event.id}>
                    <Col md={6} className="">
                      <NavLink as={Link} to={`${event.id}`}>
                        <div
                          className="card border-0 rounded-0"
                          key={events.id}
                          style={{
                            boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <div className="row g-0">
                            <div className="col-5">
                              <img
                                src={event.EV_Image}
                                className="card-img-right img-fluid rounded-0"
                                alt="Event"
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
                                    {event.EV_Country}
                                  </span>{" "}
                                  {/* - {event.date} */}
                                </small>
                                <p
                                  className="card-title fw-bold"
                                  style={{ fontSize: "14px" }}
                                >
                                  {truncateText(`${event.EV_Title}`, 80)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </Col>
                    {/* Render advertisement card after every 3rd event */}
                  </React.Fragment>
                ))}

                <div
                  className="card border-0 rounded-0 text-center bg-white"
                  style={{ maxWidth: "970px" }}
                >
                  <small className="  text-muted">Advertisement</small>
                  <div className="row g-0">
                    <div className="col-md-12 text-center pe-3">
                      <img
                        src="https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0057.jpg"
                        className="img-fluid pb-2 "
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Desktop: Display */}
      <section className="d-none d-lg-flex">
        <Container fluid className="py-2">
          <Row className="g-0">
            <Col lg={9}>
              <h5 className="pt-3 ms-2 fw-bolder">Trending Events</h5>
              <Row className="g-2 pe-2">
                {events.map((event, index) => (
                  <React.Fragment key={event.id}>
                    <Col md={6}>
                      <NavLink as={Link} to={`${event.id}`}>
                        <div
                          className="card border-0 rounded-0"
                          style={{
                            boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <div className="row g-0">
                            <div className="col-5">
                              <img
                                src={event.EV_Image}
                                className="card-img-right img-fluid rounded-0"
                                alt="Event"
                                style={{ height: "125px", width: "100%" }}
                              />
                            </div>
                            <div className="col-7 p-0">
                              <div className="card-body pt-0 bg-transparent">
                                <small
                                  className="text-primary-emphasis fw-bold"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="text-primary text-uppercase">
                                    {event.EV_Country}
                                  </span>{" "}
                                  {/* - {event.EV_StartDate} */}
                                </small>
                                <p
                                  className="card-title fw-bold"
                                  style={{ fontSize: "14px" }}
                                >
                                  {truncateText(event.EV_Title, 50)}
                                </p>
                                <p
                                  className="card-text"
                                  style={{ fontSize: "12px" }}
                                >
                                  {truncateText(event.EV_Description, 60)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </Col>
                    {/* Insert advertisement after every 6 events */}
                    {(index + 1) % 6 === 0 && (
                      <Col md={12} className="text-center">
                        <div
                          style={{
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          <h6 style={{ fontSize: "11px" }}>ADVERTISEMENT</h6>
                          <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                            <img
                              src="https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0057.jpg"
                              alt="Advertisement"
                              className="mb-4"
                            />
                          </Link>
                        </div>
                      </Col>
                    )}
                  </React.Fragment>
                ))}
              </Row>
            </Col>
            <Col
              lg={3}
              className="text-center"
              style={{ backgroundColor: "#f4f4f6" }}
            >
              {/* Fixed sidebar advertisement */}
              <div>
                <h6 className="py-1" style={{ fontSize: "11px" }}>
                  ADVERTISEMENT
                </h6>
                <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                  <img
                    src="https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0062.jpg"
                    alt=""
                    height={"600px"}
                    width={"300px"}
                    className="mb-4"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
