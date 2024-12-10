import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/home">
        {"<Clarusway/>"} <span>Recipe</span>
      </Logo>

      <Hamburger onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu ackapa={open} onClick={() => setOpen(!open)}>
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
