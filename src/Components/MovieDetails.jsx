import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Image, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import NavBar from "./NavBar";

const LocalEventDetail = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://s0.2mdn.net/simgad/8641236911096311407",
    "https://tpc.googlesyndication.com/simgad/11881701891935889806",
    "https://tpc.googlesyndication.com/simgad/7076629710210172092",
    "https://tpc.googlesyndication.com/simgad/18192291198114234065",
    "https://tpc.googlesyndication.com/simgad/7064950786490639758",
  ];

  // Fetch movie data based on eventId
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `https://www.bharatabroad.com/api/movies/${id}`
        );
        setEventData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching event data:", err);
        setError("Failed to load event data. Please try again later.");
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id]);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, [images.length]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="pt-5">
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <>
      <NavBar />
      <section style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Container className="pt-5">
          <Row
            className="border border-light-subtle border-2 rounded-3 p-4"
            style={{ backgroundColor: "white" }}
          >
            <Col xs={12} md={4} lg={3} className="mb-3">
              <Image
                src={eventData.ET_Image}
                alt={eventData.ET_Title}
                fluid
                className="border rounded"
              />
            </Col>
            <Col xs={12} md={8} lg={9}>
              <p className="text-danger fw-bold">{eventData.ET_Language}</p>
              <h2 className="event-title fw-bold">{eventData.ET_Title}</h2>
              <h6 className="mb-2">
                <strong>
                  <i className="fas fa-film me-2 text-primary"></i>
                </strong>
                {eventData.ET_Genre}
              </h6>
              <h6 className="mb-2">
                <strong>
                  <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                </strong>
                {eventData.ET_City}, {eventData.ET_State},{" "}
                {eventData.ET_Country}
              </h6>
              <h6 className="mb-2">
                <strong>
                  <i className="fas fa-clock me-2 text-success"></i>
                </strong>
                {eventData.ET_Duration}
              </h6>
              <h6 className="mb-2">
                <strong>
                  <i className="fas fa-star me-2 text-warning"></i>
                </strong>
                {eventData.ET_Rating}/10
              </h6>
            </Col>
          </Row>

          <Row className="pt-4">
            <Col>
              <h4 className="fw-bold">Description</h4>
              <p align="justify">{eventData.ET_Description}</p>
            </Col>
          </Row>

          <Row
            className="mt-4 p-4 bg-light rounded shadow-sm"
            style={{ backgroundColor: "white" }}
          >
            <Col md={3} className="mb-3">
              <h6 className="fw-bold">Production</h6>
              <p>{eventData.ET_Production}</p>
            </Col>
            <Col md={3} className="mb-3">
              <h6 className="fw-bold">Release Date</h6>
              <p>{new Date(eventData.ET_ReleaseDate).toLocaleDateString()}</p>
            </Col>
            <Col md={3} className="mb-3">
              <h6 className="fw-bold">Subtitles</h6>
              <p>{eventData.ET_Subtitles || "N/A"}</p>
            </Col>
            <Col md={3} className="mb-3">
              <h6 className="fw-bold">Language</h6>
              <p>{eventData.ET_Language}</p>
            </Col>
          </Row>

          {/* Banner Advertisement */}
          <section className="pt-5">
            <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
              <Image
                className="mx-auto d-block"
                src={images[currentImageIndex]}
                fluid
              />
            </Link>
          </section>
        </Container>
      </section>
    </>
  );
};

export default LocalEventDetail;
