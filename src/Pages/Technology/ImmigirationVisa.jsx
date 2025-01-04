import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const ImmigrationGuidelines = () => {
  const categories = [
    {
      name: "Apply for Visa",
      link:
        "https://boi.gov.in/boi/public/content/pages/df1a154d-8883-44bf-9750-8208149fbc8e",
    },
    {
      name: "Business in India",
      link:
        "https://boi.gov.in/boi/public/content/pages/bfb8c2b9-af78-45e9-b8aa-944a9cfd15ce",
    },
    {
      name: "Study in India",
      link:
        "https://boi.gov.in/boi/public/content/pages/c7950f94-1736-450c-b526-b7a747eac403",
    },
    {
      name: "Tourism in India",
      link:
        "https://boi.gov.in/boi/public/content/pages/c26d0578-408a-4443-a462-1437b2d6403a",
    },
    {
      name: "Citizenship",
      link:
        "https://boi.gov.in/boi/public/content/pages/124171ca-42dc-4ce1-ad97-2dd6a405d110",
    },

    {
      name: "OCI Card Information",
      link: "https://ociservices.gov.in/",
    },
    {
      name: "Medical Treatment in India",
      link:
        "https://boi.gov.in/boi/public/content/pages/80f79bcc-d404-45c0-a0f0-2af64ea5301a",
    },
  ];
  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row>
          <Col lg={9}>
            <h4 className="my-4 fw-bold">
              General Guidelines for those Travelling to India
            </h4>
            <ul>
              <li>
                Immigration Clearance: Both Indian citizens and foreigners must
                obtain clearance at arrival and departure.
              </li>
              <li>
                Visa & Entry: Visa approval doesn’t guarantee entry; final
                discretion lies with immigration.
              </li>
              <li>
                Valid Documents: Foreign nationals need a valid passport and
                visa, unless exempted.
              </li>
              <li>
                Biometrics & Stamping: Passport biometrics may be taken and
                stamped at immigration.
              </li>
              <li>
                Entry Points: Foreigners must use Authorized Immigration Check
                Posts (ICPs).
              </li>
              <li>
                Passport Stamping: Ensure arrival/departure stamps are on your
                passport; missing stamps can be obtained at FRRO or ICP.
              </li>
              <li>
                Visa Adherence: Foreign nationals must comply with their visa
                purpose.
              </li>
              <li>
                Tourist Stay: Maximum 180 days per year for tourist visas.
              </li>
              <li>
                Restricted Areas: Permission needed for Protected, Restricted,
                and Cantonment Areas.
              </li>
              <li>
                Religious Activity: No religious preaching, conversion, or
                propaganda.
              </li>
              <li>
                Health Precautions: Yellow Fever certificate required if
                traveling from affected countries; medical screening may be
                necessary for arrivals from areas with public health concerns.
              </li>
              <li>
                For more details about health regulations, please{" "}
                <a href="https://boi.gov.in/boi/public/content/pages/fdae94c4-b8a5-4f2a-8d1f-a4e53863c315">
                  click here
                </a>
                .
              </li>
            </ul>

            <h5>
              Visit the official website for more details:{" "}
              <a
                href="https://www.boi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.boi.gov.in
              </a>
            </h5>
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

export default ImmigrationGuidelines;
