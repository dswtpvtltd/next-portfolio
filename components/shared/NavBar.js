import React from "react";
import Link from "next/link";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

const AppLink = ({ children, className, href }) => (
  <Link href={href} legacyBehavior>
    <a className={className}>{children}</a>
  </Link>
);

const AppNavBar = () => {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <AppLink href={"/"} className="mx-3 font-weight-bold navbar-brand">
          VidyaSagar
        </AppLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <AppLink href="/portfolios" className={`me-3 nav-link`}>
              Portfolio
            </AppLink>
            <AppLink href="/forum/categories" className={`me-3 nav-link`}>
              Categories
            </AppLink>
            <AppLink href="/cv" className={`me-3 nav-link`}>
              Cv
            </AppLink>
            <AppLink href="/askme" className={`me-3 nav-link`}>
              Ask me
            </AppLink>
          </Nav>
          <Nav>
            <AppLink
              href="/register"
              className={`me-3 nav-link btn btn-success bg-green-2 bright`}
            >
              Sign Up
            </AppLink>
            <AppLink
              href="/login"
              className={`me-3 nav-link btn btn-success bg-green-2 bright`}
            >
              Sign In
            </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
