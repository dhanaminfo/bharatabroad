import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./SportsNavBar.css";
import { Link } from "react-router-dom";
const SportsNavBar = () => {
  return (
    <div className="">
      <Navbar expand="lg shadow-sm">
        <Container className="d-flrex justify-content-center">
          <div className="menu">
            <div className="menu-item">
              <Nav.Link as={Link} to="/cricket">
                Cricket
              </Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link as={Link} to="/chess">
                Chess
              </Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link as={Link} to="/hockey">
                Hockey
              </Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link as={Link} to="/nba">
                NBA
              </Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link as={Link} to="/nfl">
                NFL
              </Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link as={Link} to="/ncaa">
                NCAA
              </Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link as={Link} to="/golf">
                Golf
              </Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link as={Link} to="/rugby">
                Rugby
              </Nav.Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default SportsNavBar;
