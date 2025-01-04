import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const GermanyImmigrationGuidelines = () => {
  const categories = [
    {
      name: "Apply for Visa",
      link: "https://visa.diplo.de/en/",
    },
    {
      name: "Schengen Visa (Short-Stay)",
      link: "https://www.germany-visa.org/schengen-visa/",
    },
    {
      name: "National Visa (Long-Stay)",
      link: "https://www.germany-visa.org/national-visa/",
    },
    {
      name: "Work Visa",
      link: "https://www.make-it-in-germany.com/en/visa-residence/types/work/",
    },
    {
      name: "Study Visa",
      link: "https://www.germany-visa.org/student-visa/",
    },
    {
      name: "Family Reunion Visa",
      link: "https://www.germany-visa.org/family-reunion/",
    },
    {
      name: "Job Seeker Visa",
      link:
        "https://www.make-it-in-germany.com/en/visa-residence/types/job-seeker/",
    },
    {
      name: "EU Blue Card",
      link:
        "https://www.make-it-in-germany.com/en/visa-residence/eu-blue-card/",
    },

    {
      name: "Citizenship",
      link: "https://www.bamf.de/EN/Themen/Einbuergerung/einbuergerung.html",
    },
  ];

  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row>
          <Col lg={9}>
            <h4 className="my-4 fw-bold">
              General Guidelines for Germany Immigration and Visa Applications
            </h4>
            <ul>
              <li>
                <strong>Visa Types:</strong>
                <ul>
                  <li>
                    <strong>Short-Stay Visas (Schengen):</strong> Covers stays
                    up to 90 days for tourism, business, or family visits.
                  </li>
                  <li>
                    <strong>Long-Stay National Visas:</strong> Includes Work,
                    Study, and Family Reunification visas for extended stays.
                  </li>
                  <li>
                    <strong>Specialized Visas:</strong> Job Seeker Visa for
                    skilled workers and EU Blue Card for highly qualified
                    professionals.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Key Requirements:</strong>
                <ul>
                  <li>Valid passport and completed visa application form.</li>
                  <li>
                    Proof of financial means (e.g., €11,208/year for students).
                  </li>
                  <li>Travel health insurance covering the entire stay.</li>
                  <li>Accommodation details and purpose-specific documents.</li>
                </ul>
              </li>
              <li>
                <strong>Application Process:</strong>
                <ol>
                  <li>Determine the appropriate visa type for your purpose.</li>
                  <li>
                    Submit the application at the nearest German embassy or
                    consulate.
                  </li>
                  <li>Pay visa fees (starting at €80 for short-stay visas).</li>
                  <li>
                    Provide biometrics if required and attend an interview.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Processing Times:</strong> Typically 15 days for
                short-term visas and several weeks for long-term visas.
              </li>
              <li>
                <strong>Post-Arrival Requirements:</strong> Long-term residents
                must apply for a Residence Permit upon arrival in Germany.
              </li>
              <li>
                <strong>Tips for Success:</strong>
                <ul>
                  <li>Start early, as visa processing can take time.</li>
                  <li>Ensure all documents are accurate and complete.</li>
                  <li>
                    Consult official resources like the Federal Foreign Office,
                    BAMF, and "Make it in Germany" for guidance.
                  </li>
                </ul>
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
                  alt="Ad"
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

export default GermanyImmigrationGuidelines;
