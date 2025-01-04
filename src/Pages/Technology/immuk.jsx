import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const UKVisaGuidelines = () => {
  const categories = [
    {
      name: "Apply for Visa",
      link: "https://www.gov.uk/apply-uk-visa",
    },
    {
      name: "UK Visa Application Guidance",
      link: "https://www.gov.uk/apply-to-come-to-the-uk",
    },
    {
      name: "Work Visa",
      link: "https://www.gov.uk/work-visa",
    },
    {
      name: "Study Visa",
      link: "https://www.gov.uk/student-visa",
    },
    {
      name: "Tourist Visa",
      link: "https://www.gov.uk/standard-visitor-visa",
    },
    {
      name: "Family Visa",
      link: "https://www.gov.uk/uk-family-visa",
    },
    {
      name: "Settlement Visa",
      link: "https://www.gov.uk/settle-in-the-uk",
    },
    {
      name: "Citizenship",
      link: "https://www.gov.uk/becoming-a-british-citizen",
    },
  ];

  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row>
          <Col lg={9}>
            <h4 className="my-4 fw-bold">General UK Visa Guidelines</h4>
            <ul>
              <li>
                <strong>Determine the Right Visa Type:</strong>
                <ul>
                  <li>
                    Work Visas: Includes Skilled Worker Visa, Global Talent
                    Visa, and Temporary Worker Visas.
                  </li>
                  <li>
                    Study Visas: Includes Student Visa and Short-term Study
                    Visa.
                  </li>
                  <li>
                    Tourist Visas: Standard Visitor Visa for tourism, family
                    visits, or business trips.
                  </li>
                  <li>
                    Family Visas: For joining family members settled in the UK.
                  </li>
                  <li>
                    Settlement Visas: Includes Indefinite Leave to Remain (ILR)
                    and routes for long-term residency.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Eligibility Criteria:</strong> Each visa category has
                specific requirements, which may include:
                <ul>
                  <li>Proof of qualifications or work experience.</li>
                  <li>
                    Sponsorship from a licensed UK sponsor (for work visas).
                  </li>
                  <li>Proof of funds to support your stay.</li>
                  <li>English language proficiency.</li>
                  <li>Health surcharge payment (if applicable).</li>
                </ul>
              </li>
              <li>
                <strong>Online Application Process:</strong> Applications are
                submitted through the official UK Visas and Immigration (UKVI)
                website. Fill out the application form, upload required
                documents, and pay the visa fee.
              </li>
              <li>
                <strong>Documents Required:</strong> Depending on the visa type,
                you may need:
                <ul>
                  <li>A valid passport or travel document.</li>
                  <li>
                    Confirmation of Acceptance for Studies (CAS) for Student
                    Visas.
                  </li>
                  <li>Certificate of Sponsorship (CoS) for work visas.</li>
                  <li>Proof of relationship for family visas.</li>
                  <li>Evidence of financial support.</li>
                </ul>
              </li>
              <li>
                <strong>Biometric Appointment:</strong> Attend a visa
                application center to provide fingerprints and a photograph.
                Some visas may require an in-person interview.
              </li>
              <li>
                <strong>Visa Decision Times:</strong> Standard processing times
                vary but typically range from 3 to 12 weeks, depending on the
                visa type. Priority and super-priority services may be
                available.
              </li>
              <li>
                <strong>Immigration Health Surcharge (IHS):</strong> Most
                applicants staying longer than six months must pay the IHS,
                granting access to the UK's National Health Service (NHS).
              </li>
              <li>
                <strong>Visa Validity and Extensions:</strong> Check your visa’s
                expiration date and conditions. Apply for extensions or changes
                of visa type well before expiry.
              </li>
              <li>
                <strong>Compliance with Visa Conditions:</strong> Abide by work
                restrictions, study commitments, or travel permissions
                associated with your visa. Notify UKVI of changes in your
                personal circumstances, such as address or marital status.
              </li>
              <li>
                <strong>Settlement and Citizenship Pathways:</strong> Many visas
                lead to Indefinite Leave to Remain (ILR), which allows permanent
                residency. After obtaining ILR, you may apply for British
                citizenship if eligible.
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

export default UKVisaGuidelines;
