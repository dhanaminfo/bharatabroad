import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const AchievementsTimeline = () => {
  const achievements = [
    {
      year: "2000",
      title: "Tata Tea Acquires Tetley",
      description:
        "Ratan Tata led Tata Tea in acquiring Tetley, making Tata the second-largest tea company globally.",
    },
    {
      year: "2007",
      title: "Tata Steel Acquires Corus",
      description:
        "Under his leadership, Tata Steel acquired Corus Group, becoming one of the largest steel producers in the world.",
    },
    {
      year: "2008",
      title: "Launch of Tata Nano",
      description:
        "Ratan Tata introduced Tata Nano, a highly affordable car designed to make vehicle ownership accessible to the masses in India.",
    },
    {
      year: "2008",
      title: "Jaguar Land Rover Acquisition",
      description:
        "He spearheaded Tata Motors’ acquisition of Jaguar Land Rover, establishing Tata as a global automotive player.",
    },
    {
      year: "2010",
      title: "Tata Power Expands into Renewable Energy",
      description:
        "He expanded Tata Power’s focus on renewable energy, making it one of the largest private-sector power companies in India.",
    },
    {
      year: "2012",
      title: "Philanthropic Initiatives Through Tata Trusts",
      description:
        "Ratan Tata continues to support healthcare, education, and rural development, reinforcing his philanthropic legacy.",
    },
    {
      year: "2020",
      title: "Expansion of TCS as a Global Leader",
      description:
        "During his tenure, Tata Consultancy Services grew into a global IT services leader, positioning India as a tech hub.",
    },
  ];

  return (
    <>
      <NavBar />
      <Container fluid className="my-3 col-lg-11">
        <Row>
          <Col lg={12} className="mb-3">
            {" "}
            <h5 className="fw-bold text-primary-emphasis mb-0">
              The Padma Bhushan and The Padma Vibhushan Ratan Tata passes away
              at 86
            </h5>
            <small className="">
              Ratan Tata To Receive State Funeral; Mortal Remains To Be Kept At
              NCPA For Public Darshan Today
            </small>
          </Col>
          <Col lg={6}>
            {" "}
            <Image
              className="mx-auto d-block rounded-2"
              src="https://th-i.thgim.com/public/incoming/15dbf8/article68738140.ece/alternates/LANDSCAPE_1200/image%206.jpeg"
              fluid
            />
          </Col>
          <Col lg={6}>
            <p>
              Tata was admitted to Breach Candy Hospital in critical condition
              and was under intensive care from 7 October 2024. He died there on
              the night of 9 October 2024 at the age of 86. A day of mourning
              was announced by the Government of Maharashtra following his
              death.
            </p>
            <p>
              Ratan Tata To Receive State Funeral; Mortal Remains To Be Kept At
              NCPA For Public Darshan Today
            </p>

            <p>
              During this period, the national flag will fly at half-mast in
              government offices in the state and no entertainment or
              entertainment programs will be organized. CM has announced state
              mourning on Thursday (Oct 10).
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="col-lg-11">
        <h5 className="fw-bold mb-3">
          Ratan Tata's Industrial Achievements Timeline
        </h5>
        <Row className="">
          <Col lg={9}>
            {achievements.map((achievement, index) => (
              <div lg={9} key={index} className="mb-2">
                <div>
                  <Card.Body>
                    <small
                      style={{
                        fontSize: "12px",
                      }}
                      className="text-primary"
                    >
                      {achievement.year}
                    </small>
                    <Card.Title className="h5 text-primary-emphasis">
                      {achievement.title}
                    </Card.Title>
                    <Card.Text className="" style={{ fontSize: "15px" }}>
                      {achievement.description}
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            ))}
          </Col>
          <Col lg={3} md={3} className="mt-3">
            <div className="d-flex justify-content-center">
              <small>Advertisement</small>
            </div>
            <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
              <Image
                className="mx-auto d-block pt-2 border"
                src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Brown+Illustrative+Krishna+Janmashtami+Greeting+Instagram+Post+(1).gif"
                fluid
              />
            </Link>
            {/*
              <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                <Image
                  className="mx-auto d-block pt-2 border"
                  src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+And+Red+Bold+Ganesh+Chaturthi+Instagram+Post.gif"
                  fluid
                />
              </Link>
              <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                <Image
                  className="mx-auto d-block pt-2 border"
                  src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Video+Wishing+Happy+Ganesh+Chaturthi+Whatsapp+Story.jpg"
                  fluid
                />
              </Link> */}
            <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
              <Image
                className="mx-auto d-block pt-2 border"
                src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Maroon+traditional+Minimal+Guru+Purnima+Greeting+Instagram+Post.gif"
                fluid
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AchievementsTimeline;
