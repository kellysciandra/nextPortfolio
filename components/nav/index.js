import React, { useState } from "react";
import Link from "next/link";

import {
  NavContainer,
  NavHeader,
  LinkStyle,
  Toggle,
  Hamburger,
  Home,
} from "./nav.styles";

const NavBar = () => {
  return (
    <NavContainer>
      <Link href="/">
        <LinkStyle>
          <Home>
            <Home className="inside">ks</Home>
          </Home>
        </LinkStyle>
      </Link>
      <Link href="/projects">
        <LinkStyle>projects</LinkStyle>
      </Link>
      <Link href="/contact">
        <LinkStyle>contact</LinkStyle>
      </Link>
    </NavContainer>
  );
};

export default NavBar;
