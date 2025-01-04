import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Tab,
  Nav,
  Button,
  ListGroup,
  Table,
} from "react-bootstrap";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

function USFootball() {
  return (
    <>
      <NavBar />
      <section>
        <div
          style={{
            width: "100%",
            height: "60vh",
            backgroundImage:
              'url("https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_1280.jpg")',
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
      <Container fluid className="mt-4">
        <Row>
          <Col xs={12} lg={8}>
            <h4 className="fw-bold">US College Football Updates</h4>
            <Tab.Container defaultActiveKey="schedule">
              <Nav variant="tabs" className="mb-3">
                <Nav.Item>
                  <Nav.Link eventKey="schedule">Schedule</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="teams">Teams</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="leaderboard">Leaderboard</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="schedule">
                  <Schedule />
                </Tab.Pane>
                <Tab.Pane eventKey="teams">
                  <Teams />
                </Tab.Pane>
                <Tab.Pane eventKey="leaderboard">
                  <Leaderboard />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
          <Col
            lg={4}
            className="text-center"
            style={{ backgroundColor: "#f4f4f6" }}
          >
            {/* Fixed sidebar advertisement */}
            <div>
              <h6 className="py-1" style={{ fontSize: "11px" }}>
                ADVERTISEMENT
              </h6>
              <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                <img
                  src="https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0062.jpg"
                  alt=""
                  height={"600px"}
                  width={"300px"}
                  className="mb-4"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function Schedule() {
  // Example data for upcoming matches
  const matches = [
    { date: "Sep 1, 2024", teams: "Team A vs Team B", time: "7:00 PM" },
    { date: "Sep 2, 2024", teams: "Team C vs Team D", time: "5:00 PM" },
    { date: "Sep 3, 2024", teams: "Team E vs Team F", time: "6:30 PM" },
    { date: "Sep 4, 2024", teams: "Team G vs Team H", time: "8:00 PM" },
    // Add more data as needed
  ];

  return (
    <Card>
      <Card.Header>Upcoming Matches</Card.Header>
      <Card.Body>
        {/* Add a div wrapper with overflow-x for horizontal scrolling */}
        <div style={{ overflowX: "auto", width: "100%" }}>
          <Table responsive="sm" hover>
            <thead>
              <tr>
                <th>Teams</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr key={index}>
                  <td className="text-primary">{match.teams}</td>
                  <td className="text-primary">{match.date}</td>
                  <td className="text-primary">{match.time}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
}

function Teams() {
  // Example data for teams and their matches
  const teams = [
    {
      name: "Team A",
      coach: "Coach A",
      city: "City A",
      matches: [
        { opponent: "Team B", date: "Sep 1, 2024", time: "7:00 PM" },
        { opponent: "Team C", date: "Sep 8, 2024", time: "6:00 PM" },
      ],
    },
    {
      name: "Team B",
      coach: "Coach B",
      city: "City B",
      matches: [
        { opponent: "Team A", date: "Sep 1, 2024", time: "7:00 PM" },
        { opponent: "Team D", date: "Sep 10, 2024", time: "8:00 PM" },
      ],
    },
  ];

  return (
    <Row xs={1} md={2} className="g-4">
      {teams.map((team, index) => (
        <Col key={index}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{team.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {team.coach} - {team.city}
              </Card.Subtitle>
              <Card.Text>Upcoming Matches:</Card.Text>
              <ListGroup variant="flush">
                {team.matches.map((match, i) => (
                  <ListGroup.Item key={i}>
                    {match.opponent} on {match.date} at {match.time}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">View Team Details</Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

function Leaderboard() {
  // Example data for leaderboard
  const leaderboard = [
    { position: 1, team: "Team A", points: 15 },
    { position: 2, team: "Team B", points: 12 },
    { position: 3, team: "Team C", points: 10 },
  ];

  return (
    <Card>
      <Card.Header>Leaderboard</Card.Header>
      <Card.Body>
        {leaderboard.map((entry, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>
                {entry.position}. {entry.team}
              </Card.Title>
              <Card.Text>Points: {entry.points}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Card.Body>
    </Card>
  );
}

export default USFootball;
