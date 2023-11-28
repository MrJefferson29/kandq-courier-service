import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/Header.css";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { faDollyBox } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" className="navy" >
        <Container >
          <Navbar.Brand href="/">
            <div className="IconWrapper">
              <FontAwesomeIcon icon={faDollyBox} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ position: "relative", background: "aliceblue" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            sticky="top"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Nav.Link
                className="link"
                href="/"
                style={{ color: "aliceblue" }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                className="link"
                href="/tracking"
                style={{ color: "aliceblue" }}
              >
                TRACK PACKAGE
              </Nav.Link>
              {auth ? (
                <Nav.Link
                  className="link"
                  href="/addstory"
                  style={{ color: "aliceblue" }}
                >
                  NEW PACKAGE
                </Nav.Link>
              ) : (
                <></>
              )}
              <Nav.Link
                className="link"
                href="/about"
                style={{ color: "aliceblue" }}
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                className="link"
                href="/get-delivery-quote"
                style={{ color: "aliceblue" }}
              >
                GET QUOTE
              </Nav.Link>
              <Nav.Link
                className="link"
                href="/terms-and-privacy-policy"
                style={{ color: "aliceblue" }}
              >
                OUR POLICIES
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;

const Styles = styled.div`
  // height: 200px;
  .IconWrapper {
    font-size: 56px;
    color: sandybrown;
    padding-right: 20px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
  .link {
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
    color: aliceblue;
    margin-left: 45px;
  }
  .eor {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
