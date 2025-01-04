import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const NewZealandImmigrationGuidelines = () => {
  const categories = [
    {
      name: "Apply for Visa",
      link: "https://www.immigration.govt.nz/new-zealand-visas/apply",
    },
    {
      name: "Visitor Visa",
      link: "https://www.immigration.govt.nz/new-zealand-visas/options/visit",
    },
    {
      name: "Work Visa",
      link: "https://www.immigration.govt.nz/new-zealand-visas/options/work",
    },
    {
      name: "Student Visa",
      link: "https://www.immigration.govt.nz/new-zealand-visas/options/study",
    },
    {
      name: "Resident Visa",
      link:
        "https://www.immigration.govt.nz/new-zealand-visas/options/live-permanently",
    },
    {
      name: "Business and Investment Visa",
      link: "https://www.immigration.govt.nz/new-zealand-visas/options/invest",
    },

    {
      name: "Citizenship",
      link: "https://www.dia.govt.nz/New-Zealand-Citizenship",
    },
  ];

  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row>
          <Col lg={9}>
            <h4 className="my-4 fw-bold">
              General Guidance on New Zealand Immigration and Visas
            </h4>
            <ul>
              <li>
                <b>Visa Types:</b>
                <ul>
                  <li>Visitor Visa: For tourism, family, or short visits.</li>
                  <li>
                    Work Visa: Temporary work opportunities, including
                    employer-sponsored options.
                  </li>
                  <li>
                    Student Visa: For international students in New Zealand
                    institutions.
                  </li>
                  <li>
                    Resident Visa: Includes Skilled Migrant and Family
                    Partnership categories.
                  </li>
                  <li>
                    Business/Investment Visas: For entrepreneurs and investors.
                  </li>
                </ul>
              </li>
              <li>
                <b>Key Requirements:</b> Valid passport, proof of funds, medical
                and character checks, and English proficiency (if required).
              </li>
              <li>
                <b>Application Process:</b>
                <ul>
                  <li>Create an account on Immigration Online.</li>
                  <li>
                    Submit an online application with supporting documents.
                  </li>
                  <li>Pay the fee and await processing.</li>
                </ul>
              </li>
              <li>
                <b>Skilled Migrant Category:</b> Submit an Expression of
                Interest (EOI); receive an Invitation to Apply (ITA) if
                selected.
              </li>
              <li>
                <b>Processing Times & Costs:</b> Vary by visa type and
                complexity; fees depend on category and nationality.
              </li>
              <li>
                <b>Tips:</b> Check the ESID List for in-demand occupations and
                consult licensed advisors for complex cases.
              </li>
              <li>
                Visit{" "}
                <a
                  href="https://www.immigration.govt.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Immigration New Zealand
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

export default NewZealandImmigrationGuidelines;
