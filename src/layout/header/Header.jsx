import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/view">View</Navbar.Brand>          
          <Navbar.Brand href="/reg">Registration</Navbar.Brand>          
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
