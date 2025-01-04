import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const CanadaImmigrationGuidelines = () => {
  const resources = [
    {
      name:
        "Official Website: Government of Canada Immigration and Citizenship",
      link: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    },
    {
      name: "IRCC Help Centre",
      link: "https://www.cic.gc.ca/english/helpcentre/index.asp",
    },
    {
      name: "Visa Application Centres (VACs)",
      link: "https://www.cic.gc.ca/english/information/offices/vac.asp",
    },
    {
      name: "Visitor Visa (Tourist Visa)",
      link:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html",
    },
    {
      name: "Work Permit",
      link:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html",
    },
    {
      name: "Study Permit",
      link:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html",
    },
    {
      name: "Super Visa",
      link:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/super-visa.html",
    },
    {
      name: "Express Entry",
      link:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html",
    },
    {
      name: "Provincial Nominee Program (PNP)",
      link:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html",
    },
    {
      name: "Family Sponsorship",
      link:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html",
    },
    {
      name: "Start-up Visa Program",
      link:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/start-up-visa.html",
    },
    {
      name: "Quebec Skilled Worker Program",
      link:
        "https://www.immigration-quebec.gouv.qc.ca/en/immigrate-settle/permanent-workers/index.html",
    },
    {
      name: "Apply for Visa",
      link:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/application.html",
    },
    {
      name: "Citizenship",
      link:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html",
    },
  ];

  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row>
          <Col lg={9}>
            <h4 className="my-4 fw-bold">
              General Guidelines for Canada Immigration and Visa Applications
            </h4>
            <ul>
              <li>
                <strong>Visa Types:</strong>
                <ul>
                  <li>
                    Temporary Visas: Visitor Visa, Work Permit, Study Permit,
                    Super Visa.
                  </li>
                  <li>
                    Permanent Residency: Express Entry, Provincial Nominee
                    Program (PNP), Family Sponsorship, Start-up Visa, and Quebec
                    Skilled Worker Program.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Requirements:</strong> Valid passport, proof of funds,
                language proficiency (IELTS/TEF), educational credentials,
                medical exam, and police clearance.
              </li>
              <li>
                <strong>Application Process:</strong>
                <ol>
                  <li>Submit applications via the IRCC portal.</li>
                  <li>Provide biometrics and required documents.</li>
                  <li>
                    Express Entry processing typically takes 6 months after ITA.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Tips:</strong>
                <ul>
                  <li>
                    Provide accurate details, meet deadlines, and ensure
                    document readiness.
                  </li>
                  <li>
                    Track your application and seek professional advice if
                    needed.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Visit IRCC for details:</strong> Stay updated with the
                latest policies and announcements from Immigration, Refugees,
                and Citizenship Canada (IRCC).
              </li>
            </ul>

            <h5>Helpful Resources</h5>
            <ListGroup>
              {resources.map((resource, index) => (
                <ListGroup.Item key={index}>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.name}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>

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

export default CanadaImmigrationGuidelines;
