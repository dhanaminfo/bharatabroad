import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const SwitzerlandImmigrationGuidelines = () => {
  const categories = [
    {
      name: "Apply for Visa",
      link: "https://www.sem.admin.ch/sem/en/home/themen/einreise.html",
    },
    {
      name: "Official Website: Swiss State Secretariat for Migration (SEM)",
      link: "https://www.sem.admin.ch/sem/en/home.html",
    },
    {
      name: "Schengen Visa Guidelines",
      link: "https://www.schengenvisainfo.com/switzerland-visa/",
    },
    {
      name: "Tourist Visa",
      link: "https://www.schengenvisainfo.com/switzerland-visa/tourist/",
    },
    {
      name: "Business Visa",
      link: "https://www.schengenvisainfo.com/switzerland-visa/business/",
    },
    {
      name: "Transit Visa",
      link: "https://www.schengenvisainfo.com/switzerland-visa/transit/",
    },
    {
      name: "Work Visa",
      link: "https://www.sem.admin.ch/sem/en/home/themen/arbeit.html",
    },
    {
      name: "Student Visa",
      link: "https://www.sem.admin.ch/sem/en/home/themen/bildung.html",
    },
    {
      name: "Family Reunification Visa",
      link: "https://www.sem.admin.ch/sem/en/home/themen/familiennachzug.html",
    },
    {
      name: "Permanent Residency",
      link: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt.html",
    },

    {
      name: "Citizenship",
      link: "https://www.sem.admin.ch/sem/en/home/themen/buergerrecht.html",
    },
  ];

  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row>
          <Col lg={9}>
            <h4 className="my-4 fw-bold">
              General Guidelines for Switzerland Immigration and Visa
              Applications
            </h4>
            <ul>
              <li>
                <strong>Visa Types:</strong>
                <ul>
                  <li>
                    <strong>Short-Stay Visas (Schengen Visa):</strong> Tourist,
                    Business, and Transit Visas (up to 90 days).
                  </li>
                  <li>
                    <strong>Long-Stay Visas:</strong> Work, Student, Family
                    Reunification, and Permanent Residency visas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Requirements:</strong>
                <ul>
                  <li>
                    Valid passport (at least 3 months beyond stay), completed
                    visa application, recent photo, travel itinerary, proof of
                    funds, and travel insurance.
                  </li>
                  <li>
                    Purpose-specific documents like work contracts, admission
                    letters, or invitation letters.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Application Process:</strong>
                <ol>
                  <li>Determine the visa type based on purpose.</li>
                  <li>
                    Submit the application at the nearest Swiss embassy or visa
                    center.
                  </li>
                  <li>Provide biometrics if required.</li>
                  <li>
                    Processing time is typically 10-15 days for short-term
                    visas.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Tips for Success:</strong>
                <ul>
                  <li>Ensure all documents are accurate and complete.</li>
                  <li>Apply well in advance and track your application.</li>
                  <li>Seek professional advice for complex cases.</li>
                </ul>
              </li>
              <li>
                <strong>For more details:</strong> Visit the Swiss State
                Secretariat for Migration (SEM) or Schengen Visa Info.
              </li>
            </ul>

            <h5>Helpful Resources</h5>
            <Row className="g-0">
              {categories.map((category, index) => (
                <Col
                  lg={4}
                  key={index}
                  className="d-flex align-items-center p-2 border rounded shadow-sm bg-light hover-effect"
                >
                  <a
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {category.name}
                  </a>
                </Col>
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
          <Col lg={3} md={3}>
            <div className="d-flex justify-content-center">
              <small>Advertisement</small>
            </div>
            <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
              <Image
                className="mx-auto d-block pt-2 border"
                src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Maroon+traditional+Minimal+Guru+Purnima+Greeting+Instagram+Post.gif"
                fluid
              />
            </Link>
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
    </>
  );
};

export default SwitzerlandImmigrationGuidelines;
