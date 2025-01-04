import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const NetherlandsImmigrationGuidelines = () => {
  const categories = [
    { name: "Apply for Visa", link: "https://ind.nl/en/applications" },
    { name: "Short-Stay Visa", link: "https://ind.nl/en/short-stay" },
    { name: "Long-Stay Visa", link: "https://ind.nl/en/long-stay-mvv" },
    {
      name: "Work Visa",
      link: "https://ind.nl/en/work/working-in-the-netherlands",
    },
    { name: "Study Visa", link: "https://ind.nl/en/study" },
    {
      name: "Family Reunification Visa",
      link: "https://ind.nl/en/family/family-reunification",
    },
    {
      name: "Business and Investor Visa",
      link: "https://ind.nl/en/investor-visa",
    },

    { name: "Citizenship", link: "https://ind.nl/en/dutch-citizenship" },
  ];

  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row>
          <Col lg={9}>
            <h4 className="my-4 fw-bold">
              Guide to Netherlands Immigration and Visas
            </h4>
            <ul>
              <li>
                <b>Visa Types:</b>
                <ul>
                  <li>
                    Short-Stay Visa: Up to 90 days for tourism, business, or
                    family visits, valid across Schengen countries.
                  </li>
                  <li>
                    Long-Stay Visa (MVV): For stays over 90 days, required for
                    work, study, or family reunification.
                  </li>
                  <li>
                    Work Visa: Includes Highly Skilled Migrant Visa, Startup
                    Visa, and EU Blue Card.
                  </li>
                  <li>Study Visa: For students in Dutch institutions.</li>
                  <li>
                    Family Visa: For joining a family member in the Netherlands.
                  </li>
                </ul>
              </li>
              <li>
                <b>Key Requirements:</b> Valid passport, proof of funds, health
                insurance, and supporting documents like employment contracts or
                university admission.
              </li>
              <li>
                <b>Application Process:</b>
                <ul>
                  <li>
                    Short-Stay Visa: Submit at Dutch embassy with the Schengen
                    form and biometrics.
                  </li>
                  <li>
                    Long-Stay Visa: Sponsor applies to the IND; collect MVV
                    after approval.
                  </li>
                </ul>
              </li>
              <li>
                <b>Timeframes and Costs:</b>
                <ul>
                  <li>Short-Stay Visa: Approximately 15 days, €80.</li>
                  <li>
                    Long-Stay Visa: Processing takes several weeks and varies by
                    type.
                  </li>
                </ul>
              </li>
              <li>
                <b>Special Notes:</b>
                <ul>
                  <li>
                    The Highly Skilled Migrant Program supports professionals.
                  </li>
                  <li>The Startup Visa aids entrepreneurs.</li>
                  <li>
                    The Civic Integration Exam may be required for residency.
                  </li>
                </ul>
              </li>
              <li>
                Visit{" "}
                <a
                  href="https://ind.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IND
                </a>{" "}
                for detailed guidance.
              </li>
            </ul>

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
              <div className="text-center">
                {/* Mobile: Display Image 1 */}
                <Row className="d-md-none">
                  <Col>
                    <img
                      src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Maroon+traditional+Minimal+Guru+Purnima+Greeting+Instagram+Post.gif"
                      alt="Mobile"
                      className="img-fluid"
                    />
                  </Col>
                </Row>

                {/* Tablet: Display Image 2 */}
                <Row className="d-none d-md-flex d-lg-none">
                  <Col>
                    <img
                      src="https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0057.jpg"
                      alt="Tablet"
                      className="img-fluid"
                    />
                  </Col>
                </Row>

                {/* Desktop: Display Image 3 */}
                <Row className="d-none d-lg-flex">
                  <Col>
                    <img
                      src="https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0057.jpg"
                      alt="Desktop"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
              </div>
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

export default NetherlandsImmigrationGuidelines;
