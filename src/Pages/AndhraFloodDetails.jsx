import React from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
import img1 from "../Images/AF-1.jpeg";
import img2 from "../Images/AF-2.jpg";
import img3 from "../Images/AF-3.jpg";
import img4 from "../Images/AF-4.webp";
import img5 from "../Images/AF-5.jpg";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
const AndhraFloodDetails = () => {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col lg={9} className="p-lg-4">
            <h4 className="fw-bold">
              Andhra Pradesh to get some respite from heavy rain
            </h4>
            <p>September 2</p>
            <Row>
              <Col md={8}>
                <img
                  src={img1}
                  className="card-img-right img-fluid mb-3"
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Col>

              <Col lg={4}>
                <p>
                  Krishna river flood water entered houses at Chinthala Katta
                  near Vijayawada on Sunday.
                </p>
                <p>
                  The AP State Disaster Management Authority issued a second
                  flood warning at the Prakasam Barrage due to continuous water
                  inflows, posing a threat to low-lying areas.
                </p>
              </Col>
              <p></p>

              <p>
                After two days of heavy rain in South Coastal Andhra Pradesh,
                which caused flooding, the state is expected to see some relief
                starting September 2. On September 1 (Sunday), many areas in the
                state did not experience rainfall. The highest recorded rainfall
                was 17 mm in the YSR district, according to the Andhra Pradesh
                State Development Planning Society.
              </p>
            </Row>
            <hr />
            <Row>
              <h4 className="fw-bold">21 trains cancelled, 10 diverted</h4>
              <Col lg={8}>
                <img
                  src={img2}
                  className="card-img-right img-fluid mb-3"
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col lg={4}>
                <p>
                  Amid heavy rainfall in Andhra Pradesh and Telangana, the South
                  Central Railway (SCR) has canceled 21 more trains and diverted
                  10 others due to waterlogging on tracks at multiple locations.
                  The rain also damaged the railway track between Kesamudram and
                  Mahabubabad in Telangana.
                </p>
              </Col>
              <p>
                Canceled trains include the MGR Chennai Central to Chhapra, New
                Delhi, and vice versa services, while diverted trains include
                Tirupati-Secunderabad, SMVT Bengaluru-Patliputra, and others.
                Due to heavy water flow at Rayanapadu, SCR also diverted two
                trains between Bengaluru and Danapur.
              </p>
              <p>
                Passengers affected by these disruptions were transported to
                Kazipet Junction by road, where stranded passengers were moved
                using "scratch rakes," trains assembled from spare coaches.
                Earlier, SCR had already canceled over 20 trains and diverted
                more than 30. Helpline numbers for passenger assistance include
                Hyderabad (27781500), Warangal (2782751), Kazipet (27782660),
                and Khammam (2782885).
              </p>
            </Row>
            <hr />
            <Row>
              <h4 className="fw-bold">
                Several Universities in Telangana postpone exams scheduled on
                Monday
              </h4>
              <Col md={8}>
                <img
                  src={img4}
                  className="card-img-right img-fluid mb-3"
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col lg={4}>
                <p>
                  {" "}
                  Due to the current weather conditions and the forecast of
                  heavy to moderate rain in parts of Telangana, the government
                  has declared Monday a holiday for all government and private
                  educational institutions. As a result, various exams have been
                  postponed.
                </p>
              </Col>

              <p>
                According to Jawaharlal Nehru Technological University,
                Hyderabad, the B. Tech III Year I Sem, B. Pharm III Year I Sem,
                and MBA I Year I Sem examinations scheduled for Monday will now
                be conducted on Thursday. Students are advised to stay updated
                through official notifications and make the necessary
                preparations accordingly, keeping safety a priority in view of
                the weather.
              </p>
            </Row>
            <hr />
            <Row>
              <h4 className="fw-bold">
                Andhra CM Naidu inspects flood-affected areas
              </h4>
              <Col md={8}>
                <img
                  src={img3}
                  className="card-img-right img-fluid mb-3"
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col lg={4}>
                {" "}
                <p>
                  A day after heavy rainfall wreaked havoc in Telangana and
                  Andhra Pradesh, more rainfall is expected in the states on
                  Monday, the India Meteorological Department (IMD) said.
                </p>
              </Col>

              <p>
                Andhra Pradesh Chief Minister Chandrababu Naidu inspected the
                flood-affected areas in the state. He told reporters that rescue
                operations are underway and control centres are being set to
                monitor the situation. The National Disaster Response Force,
                meanwhile, has been conducting search and rescue operations in
                the two states. Educational institutes will remain shut in
                rain-affected districts including Hyderabad and Vijayawada. The
                waterlogging caused by the heavy downpour has disrupted rail and
                road traffic.
              </p>
            </Row>
            <hr />
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
            <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
              <Image
                className="mx-auto d-block pt-2 border"
                src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Maroon+traditional+Minimal+Guru+Purnima+Greeting+Instagram+Post.gif"
                fluid
              />
            </Link>
            <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
              <Image
                className="mx-auto d-block pt-2 border"
                src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Brown+Illustrative+Krishna+Janmashtami+Greeting+Instagram+Post+(1).gif"
                fluid
              />
            </Link>
            <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
              <Image
                className="mx-auto d-block pt-2 border"
                src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Maroon+traditional+Minimal+Guru+Purnima+Greeting+Instagram+Post.gif"
                fluid
              />
            </Link>
            <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
              <Image
                className="mx-auto d-block pt-2 border"
                src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Brown+Illustrative+Krishna+Janmashtami+Greeting+Instagram+Post+(1).gif"
                fluid
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AndhraFloodDetails;
