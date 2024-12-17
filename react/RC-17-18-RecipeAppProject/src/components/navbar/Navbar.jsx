import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">
        {"<Clarusway/>"} <span>Recipe</span>
      </Logo>

      <Hamburger onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu ackapa={open} onClick={() => setOpen(!open)}>
        <MenuLink to="/about">About</MenuLink>

        {/* Dışarıdaki harici bir sayfaya Link ile gidemem, o yüzden Menulink kullanmıyoruz */}
        {/* <MenuLink to="/">Github</MenuLink> */}
        <a href="https://www.github.com" target="blank">
          Github
        </a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
