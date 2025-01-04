import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const USImmigrationGuidelines = () => {
  const categories = [
    {
      name: "Apply for Visa",
      link: "https://travel.state.gov/content/travel/en/us-visas.html",
    },
    {
      name: "USCIS",
      link: "https://www.uscis.gov/",
    },
    {
      name: "Travel.state.gov",
      link: "https://travel.state.gov/",
    },
    {
      name: "CBP",
      link: "https://www.cbp.gov/",
    },

    {
      name: "Student Visa",
      link:
        "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
    },
    {
      name: "Citizenship",
      link: "https://www.uscis.gov/citizenship",
    },
    {
      name: "Tourist Visa",
      link:
        "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
    },
    {
      name: "H-1B Visa",
      link:
        "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations",
    },
    {
      name: "Employment-Based Visas",
      link:
        "https://www.uscis.gov/working-in-the-united-states/permanent-workers",
    },
    {
      name: "Family-Based Immigration",
      link: "https://www.uscis.gov/family",
    },
    {
      name: "US Green Card",
      link: "https://www.uscis.gov/green-card",
    },
    {
      name: "Green Card Eligibility",
      link:
        "https://www.uscis.gov/green-card/green-card-eligibility-categories",
    },
    {
      name: "US Immigration Process",
      link: "https://www.uscis.gov/",
    },
  ];

  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row>
          <Col lg={9}>
            <h4 className="my-4 fw-bold">
              General Immigration Guidelines for the U.S.
            </h4>
            <ul>
              <li>
                <strong>Visa Categories:</strong>
                <ul>
                  <li>
                    <strong>Non-Immigrant (Temporary):</strong> Includes B-1/B-2
                    (business/tourist), F-1/M-1 (students), H-1B (specialty
                    workers).
                  </li>
                  <li>
                    <strong>Immigrant (Permanent):</strong> Family-sponsored,
                    employment-based, or Diversity Visa Lottery programs.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Visa Application:</strong>
                <ul>
                  <li>
                    Complete Form DS-160 (non-immigrant) or DS-260 (immigrant).
                  </li>
                  <li>
                    Attend an interview with required documents, including a
                    valid passport and financial proof.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Entry Process:</strong>
                <ul>
                  <li>
                    Undergo screening by Customs and Border Protection (CBP).
                  </li>
                  <li>
                    Receive an I-94 record, indicating the authorized stay
                    duration.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Maintaining Status:</strong>
                <ul>
                  <li>Follow visa terms (e.g., tourists cannot work).</li>
                  <li>Avoid overstaying or violating visa conditions.</li>
                </ul>
              </li>
              <li>
                <strong>Pathways to Citizenship:</strong> Green card holders can
                apply for citizenship via naturalization after meeting residency
                requirements.
              </li>
              <li>
                <strong>Rights and Responsibilities:</strong>
                <ul>
                  <li>
                    Know your legal rights, including protection against
                    unlawful searches.
                  </li>
                  <li>
                    Notify USCIS of address changes within 10 days of moving.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Violations:</strong> Overstaying or illegal entry can
                lead to bans or deportation.
              </li>
              <li>
                <strong>Special Programs:</strong> Programs like Temporary
                Protected Status (TPS) and Deferred Action for Childhood
                Arrivals (DACA) assist eligible individuals facing hardship.
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

export default USImmigrationGuidelines;
