import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const JapanImmigrationGuidelines = () => {
  const categories = [
    {
      name: "Apply for Visa",
      link: "https://www.mofa.go.jp/j_info/visit/visa/application.html",
    },
    {
      name: "Official Website: Embassy of Japan",
      link: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
    },
    {
      name: "Visa Application Forms",
      link: "https://www.mofa.go.jp/j_info/visit/visa/application.html",
    },
    {
      name: "Tourist Visa",
      link: "https://www.mofa.go.jp/j_info/visit/visa/short/visa.html",
    },
    {
      name: "Business Visa",
      link: "https://www.mofa.go.jp/j_info/visit/visa/short/visa.html",
    },
    {
      name: "Transit Visa",
      link: "https://www.mofa.go.jp/j_info/visit/visa/short/visa.html",
    },
    {
      name: "Work Visa",
      link: "https://www.mofa.go.jp/j_info/visit/visa/long/visa.html",
    },
    {
      name: "Student Visa",
      link: "https://www.mofa.go.jp/j_info/visit/visa/long/visa.html",
    },
    {
      name: "Spouse/Dependent Visa",
      link: "https://www.mofa.go.jp/j_info/visit/visa/long/visa.html",
    },
    {
      name: "Highly Skilled Professional Visa",
      link: "https://www.mofa.go.jp/j_info/visit/visa/long/visa.html",
    },
    {
      name: "Permanent Resident Visa",
      link: "https://www.mofa.go.jp/j_info/visit/visa/long/visa.html",
    },
  ];

  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row>
          <Col lg={9}>
            <h4 className="my-4 fw-bold">
              General Guidelines for Japan Immigration and Visa Applications
            </h4>
            <ul>
              <li>
                <strong>Visa Types:</strong>
                <ul>
                  <li>
                    Short-Term Visas: Tourist, Business, and Transit Visas.
                  </li>
                  <li>
                    Long-Term Visas: Work, Student, Spouse/Dependent, Highly
                    Skilled Professional, and Permanent Resident Visas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Requirements:</strong>
                <ul>
                  <li>
                    Valid passport, completed application form, recent photo,
                    travel itinerary, proof of funds.
                  </li>
                  <li>
                    Purpose-specific documents and criminal record certificate
                    for long-term visas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Application Process:</strong>
                <ol>
                  <li>Verify the visa type needed.</li>
                  <li>Apply at the nearest Japanese embassy or consulate.</li>
                  <li>Provide biometrics if required.</li>
                  <li>
                    Processing time is typically 5-10 days for short-term visas.
                  </li>
                  <li>Collect the visa upon approval.</li>
                </ol>
              </li>
              <li>
                <strong>Tips:</strong>
                <ul>
                  <li>
                    Ensure accurate documentation and meet all guidelines.
                  </li>
                  <li>
                    Track application status and prepare for interviews if
                    required.
                  </li>
                </ul>
              </li>
              <li>
                <strong>For more details:</strong> Visit the Ministry of Foreign
                Affairs of Japan (MOFA).
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

export default JapanImmigrationGuidelines;
