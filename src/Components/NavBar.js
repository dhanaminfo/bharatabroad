import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import myLogo from "../Images/my_logo4.png";
import { Link, useLocation } from "react-router-dom";
import Weather from "./Weather";
import { useFlag } from "./FlagContext";
import { useGeoLocation } from "./GeoLocation";
const NavBar = () => {
  const { setFlag } = useFlag();
  const location = useLocation();
  const { country } = useGeoLocation();
  const [selectedFlag, setSelectedFlag] = useState(country);

  const handleFlagClick = (flag, flagCode) => {
    setFlag(flag);
    setSelectedFlag(flag);
  };

  useEffect(() => {
    setSelectedFlag(country);
  }, [country]); // Update selectedFlag when country changes

  return (
    <div>
      {/* Visible only on mobile screens */}
      <div className="d-block d-sm-none">
        <Navbar>
          <Container>
            <NavDropdown title={selectedFlag} id="country-dropdown">
              <NavDropdown.Item onClick={() => handleFlagClick("India")}>
                IN
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleFlagClick("United States")}
              >
                US
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleFlagClick("United Kingdom")}
              >
                UK
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFlagClick("Canada")}>
                CA
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFlagClick("Australia")}>
                AU
              </NavDropdown.Item>
            </NavDropdown>
            <Weather />
          </Container>
        </Navbar>
        <Navbar expand="lg" bg="light" variant="light">
          <Container>
            {/* Left side: Country Selection Dropdown */}

            {/* Center: Logo */}
            <Navbar.Brand as={Link} to="/home">
              <img
                src={myLogo}
                alt=""
                className="img-fluid"
                style={{ height: "50px" }}
              />
            </Navbar.Brand>

            {/* Right side: Menu Icon */}
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="border-0 bold"
            />

            {/* Collapsible content */}
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/events">
                  Events
                </Nav.Link>
                <Nav.Link as={Link} to="/sports">
                  Sports
                </Nav.Link>
                <Nav.Link as={Link} to="/entertainment">
                  Entertainment
                </Nav.Link>
                <Nav.Link as={Link} to="/health">
                  Health
                </Nav.Link>
                <Nav.Link as={Link} to="/immigiration">
                  Immigiration
                </Nav.Link>
                <Nav.Link as={Link} to="/technology">
                  Technology
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Visible only on tablet screens */}
      <div className="d-none d-sm-none d-md-block d-lg-none">
        {" "}
        <Navbar>
          <Container fluid>
            <NavDropdown title={selectedFlag} id="country-dropdown">
              <NavDropdown.Item onClick={() => handleFlagClick("India")}>
                IN
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleFlagClick("United States")}
              >
                US
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleFlagClick("United Kingdom")}
              >
                UK
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFlagClick("Canada")}>
                CA
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFlagClick("Australia")}>
                AU
              </NavDropdown.Item>
            </NavDropdown>
            <Weather />
          </Container>
        </Navbar>
        <Navbar expand="lg" bg="light" variant="light">
          <Container fluid>
            {/* Left side: Country Selection Dropdown */}

            {/* Center: Logo */}
            <Navbar.Brand as={Link} to="/home" className="me-auto">
              <img
                src={myLogo}
                alt=""
                className="img-fluid"
                style={{ height: "100px" }}
              />
            </Navbar.Brand>

            {/* Right side: Menu Icon */}
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="border-0"
            />

            {/* Collapsible content */}
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/events">
                  Events
                </Nav.Link>
                <Nav.Link as={Link} to="/sports">
                  Sports
                </Nav.Link>
                <Nav.Link as={Link} to="/entertainment">
                  Entertainment
                </Nav.Link>
                <Nav.Link as={Link} to="/health">
                  Health
                </Nav.Link>
                <Nav.Link as={Link} to="/immigiration">
                  Immigiration
                </Nav.Link>
                <Nav.Link as={Link} to="/technology">
                  Technology
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Visible only on desktop screens */}
      <div className="d-none d-md-none d-lg-block">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* Left side: Country Selection Dropdown */}
              <NavDropdown title={selectedFlag} id="country-dropdown">
                <NavDropdown.Item
                  onClick={() => handleFlagClick("India", "IN")}
                >
                  IN
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleFlagClick("United States", "US")}
                >
                  US
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleFlagClick("United Kingdom", "UK")}
                >
                  UK
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleFlagClick("Canada", "CA")}
                >
                  CA
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleFlagClick("Australia", "AU")}
                >
                  AU
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" className="" style={{ fontSize: "14px" }}>
                {/* WED, JUL 04, 2024 | UPDATED 11.32AM IST |  */}
                <Weather />
              </Nav.Link>
            </Nav>
            {/* <Nav className="d-flex">
              <Nav.Item>
                <Nav.Link as={Link} to="/home">
                  <img
                    src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t39.30808-1/370251593_710694574419820_8243852131834572493_n.png?stp=dst-png_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=U2KQo03ZkHYQ7kNvgGmroG2&_nc_ht=scontent.fmaa1-1.fna&oh=00_AYDGBYnsJODvj0PDKOW2gyQhsJ6cqZvX_xHx_K_DNZFUig&oe=668BDF41"
                    alt=""
                    className="img-fluid"
                    style={{ height: "20px" }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/events">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png"
                    alt=""
                    className="img-fluid"
                    style={{ height: "20px" }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/sports">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/1200px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png"
                    alt=""
                    className="img-fluid"
                    style={{ height: "20px" }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/entertainment">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                    alt=""
                    className="img-fluid"
                    style={{ height: "20px" }}
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav> */}
          </Container>
        </Navbar>
        <Navbar className="">
          <Container className="d-flex justify-content-center">
            <Navbar.Brand as={Link} to="/home">
              <img
                src={myLogo}
                alt=""
                className="img-fluid"
                style={{ height: "100px" }}
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar bg="light" data-bs-theme="light">
          <Container fluid className="d-flex justify-content-center">
            <Nav
              className="d-flex justify-content-center fw-bold"
              activeKey="/home"
            >
              <Nav.Item>
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/events">
                  Events
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/sports">
                  Sports
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/entertainment">
                  Entertainment
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <NavDropdown title="Heritage" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#food">Food</NavDropdown.Item>
                  <NavDropdown.Item href="#fashion">Fashion</NavDropdown.Item>
                  <NavDropdown.Item href="#astrology">
                    Astrology
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#beauty">Beauty</NavDropdown.Item>
                  <NavDropdown.Item href="#shopping">Shopping</NavDropdown.Item>
                  <NavDropdown.Item href="#fitness">Fitness</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item> */}
              {/* <Nav.Item>
                <Nav.Link href="#travel">Travel</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link as={Link} to="/health">
                  Health
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/immigiration">
                  Immigiration
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/technology">
                  Technology
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link href="#auto">Auto</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#realestate">Real-estate</Nav.Link>
              </Nav.Item> */}
              {/*
          <Nav.Item>
            <Nav.Link href="#matrimonial">Matrimonial</Nav.Link>
          </Nav.Item> */}
              {/* <Nav.Item>
                <Nav.Link href="#business">Business</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#technology">Technology</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#media">Media</Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item>
                <Nav.Link as={Link} to="/intake">
                  intake
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
