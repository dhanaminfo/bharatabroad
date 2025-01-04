import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const AustralianImmigrationGuidelines = () => {
  const categories = [
    {
      name: "Apply for Visa",
      link: "https://online.immi.gov.au/lusc/login",
    },
    {
      name: "Skilled Migration Visa",
      link:
        "https://immi.homeaffairs.gov.au/visas/working-in-australia/visa-options-for-working-in-australia/skilled-visas",
    },
    {
      name: "Work Visa",
      link:
        "https://immi.homeaffairs.gov.au/visas/working-in-australia/visa-options-for-working-in-australia",
    },
    {
      name: "Study Visa",
      link:
        "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
    },
    {
      name: "Tourist Visa",
      link:
        "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
    },
    {
      name: "Family Visa",
      link: "https://immi.homeaffairs.gov.au/visas/family-and-partner-visas",
    },
    {
      name: "Business and Investment Visa",
      link:
        "https://immi.homeaffairs.gov.au/visas/working-in-australia/visa-options-for-doing-business-in-australia",
    },
    {
      name: "Citizenship",
      link: "https://immi.homeaffairs.gov.au/citizenship",
    },
  ];

  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row>
          <Col lg={9}>
            <h4 className="my-4 fw-bold">
              General Guidelines for Australian Immigration
            </h4>
            <ul>
              <li>
                <strong>Visa Options:</strong>
                <ul>
                  <li>
                    Skilled Migration: Subclass 189, 190 for in-demand skilled
                    workers.
                  </li>
                  <li>Work Visas: TSS Visa, ENS Visa for job opportunities.</li>
                  <li>Study Visas: Student Visa (subclass 500).</li>
                  <li>Tourist Visas: Visitor Visa (subclass 600).</li>
                  <li>Family Visas: Partner, Parent, or Child Visas.</li>
                  <li>Business Visas: For investors under BIIP.</li>
                </ul>
              </li>
              <li>
                <strong>Eligibility:</strong> Age limits, skills assessment,
                English proficiency, health, character checks, and proof of
                funds.
              </li>
              <li>
                <strong>Points-Based System:</strong> Skilled visas require a
                minimum of 65 points, based on age, skills, and experience.
              </li>
              <li>
                <strong>Application Process:</strong> Submit an EOI via
                SkillSelect and apply online through ImmiAccount.
              </li>
              <li>
                <strong>Required Documents:</strong> Passport, skills
                certificate, proof of funds, health insurance, and character
                certificates.
              </li>
              <li>
                <strong>Processing Times:</strong> Vary by visa type, ranging
                from weeks to months.
              </li>
              <li>
                <strong>Health Insurance:</strong> Mandatory for many visa
                types.
              </li>
              <li>
                <strong>Visa Conditions:</strong> Follow work hours, employer
                restrictions, or other specific rules.
              </li>
              <li>
                <strong>Path to PR:</strong> Skilled and family visas may lead
                to permanent residency and citizenship.
              </li>
              <li>
                <strong>Updates:</strong> Visit the Department of Home Affairs
                for current policies. Stay updated on immigration policy changes
                through the Department of Home Affairs.
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

export default AustralianImmigrationGuidelines;
