"use client";

import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import myLogo from "@/assets/images/my_logo4.png";

const DesktopNav = () => (
  <div className="d-none d-lg-block">
    <Navbar bg="light" className="border-bottom">
      <Container fluid className="d-flex justify-content-start">
        <h5 className="ps-2 fw-bold mb-0">BHARAT HERITAGE</h5>
      </Container>
    </Navbar>

    <Navbar bg="light">
      <Container fluid>
        <Nav
          className="fw-bold"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            padding: "6px 0",
          }}
        >
          <Nav.Link as={Link} href="/heritage/food">
            Food
          </Nav.Link>
          {/* <Nav.Link as={Link} href="/heritage/fitness">
            Fitness
          </Nav.Link>
          <Nav.Link as={Link} href="/heritage/beauty">
            Beauty
          </Nav.Link> */}
          <Nav.Link as={Link} href="/heritage/fashion">
            Fashion
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

const MobileNav = () => (
  <div className="d-lg-none">
    <div style={{ background: "#fff", borderBottom: "1px solid #ddd" }}>
      <Container fluid className="py-2 d-flex align-items-center">
        <Link href="/">
          <Image
            src={myLogo}
            alt="Bharat Heritage"
            style={{ height: 40, width: "auto" }}
          />
        </Link>
      </Container>
    </div>

    <div
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        borderBottom: "1px solid #ddd",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <Nav
        className="fw-bold text-secondary"
        style={{
          display: "inline-flex",
          flexWrap: "nowrap",
          gap: "20px",
          padding: "10px",
          fontSize: "14px",
        }}
      >
        <Nav.Link as={Link} className="text-secondary" href="/heritage/food">
          Food
        </Nav.Link>
        <Nav.Link as={Link} className="text-secondary" href="/heritage/fitness">
          Fitness
        </Nav.Link>
        <Nav.Link as={Link} className="text-secondary" href="/heritage/beauty">
          Beauty
        </Nav.Link>
        <Nav.Link as={Link} className="text-secondary" href="/heritage/fashion">
          Fashion
        </Nav.Link>
      </Nav>
    </div>
  </div>
);

export default function NavigationBar() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
