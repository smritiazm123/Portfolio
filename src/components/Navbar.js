import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 16);
    };
    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const closeMenu = () => updateExpanded(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour || expand ? "navbar sticky" : "navbar"}
    >
      <Container className="nav-inner">
        <Navbar.Brand
          as={Link}
          to="/"
          className="brand-lockup"
          onClick={closeMenu}
        >
          <span className="brand-mark">S</span>
          <span className="brand-text">
            Smriti <em className="brand-last">Yadav</em>
          </span>
        </Navbar.Brand>

        <div className="nav-end">
          <button
            type="button"
            className="nav-cmd"
            onClick={() =>
              window.dispatchEvent(new Event("open-command-palette"))
            }
            aria-label="Open command palette"
            title="Command palette"
          >
            ⌘K
          </button>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to sunrise mode" : "Switch to sunset mode"
            }
            title={theme === "dark" ? "Sunrise" : "Sunset"}
          >
            {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" end onClick={closeMenu}>
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/about" onClick={closeMenu}>
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/project" onClick={closeMenu}>
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-cta-item">
              <Nav.Link
                as={NavLink}
                to="/resume"
                className="nav-cta"
                onClick={closeMenu}
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
