import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/home">
        {"<Clarusway/>"} <span>Recipe</span>
      </Logo>

      <Menu>
        <MenuLink to="/about">ABOUT</MenuLink>

        {/* <MenuLink to="/">GITHUB</MenuLink> */}
        <a href="https://www.github.com" target="blank">
          GITHUB
        </a>
        <MenuLink to="/login">LOGOUT</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
