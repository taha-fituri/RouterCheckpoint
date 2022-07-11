import "../../App.css";
import "../NavBar/NavBar.css";
// import React, { useState } from "react";
import Modal1 from "../../Components/Modal/Modal";

import Filter from "../../Components/Filters/Filter";
import { Container, NavDropdown, Nav, Form, Navbar } from "react-bootstrap";
function NavBar({
  filterName,
  filterRate,
  setFilterName,
  setFilterRate,
  moviesData,
  moviesfun,
}) {
  // const [filterName, setFilterName] = useState("");
  // const [filterRate, setFilterRate] = useState(1);
  return (
    <Navbar fixed="top" className="color-nav" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white", fontSize: "x-large" }}>
          Last Movies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              style={{ color: "white", fontSize: "large" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#action2"
              style={{ color: "white", fontSize: "large" }}
            >
              Movie
            </Nav.Link>
            <NavDropdown
              title={
                <span style={{ color: "white", fontSize: "large" }}>
                  Newest
                </span>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Shang-Chi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Doctor Strange
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Everything Everywhere
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Spider-Man</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Jurassic World
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Fistful of Vengeance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Terror on the Prairie
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <div className="filterdiv">
              <Filter
                filterName={filterName}
                filterRate={filterRate}
                setFilterName={setFilterName}
                setFilterRate={setFilterRate}
              />
              <Modal1 moviesData={moviesData} moviesfun={moviesfun} />
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
