import Link from "next/link";
import { useState } from "react";
import { isMobile } from 'react-device-detect';
import {
  NavContainer,
  LinkStyle,
  Home,
  Paw
} from "./nav.styles";

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const rotate = !isMobile ? "rotate(20deg)" : "rotate(5deg)"
    const transformImage = () => {
        setToggle(!toggle)
    };
console.log(isMobile)
  return <>
    <NavContainer>
        <Link href="/">
            <LinkStyle>
            <Home>
    
                <Home className="logo">ks</Home>
        
            </Home>
            </LinkStyle>
        </Link>
        <Paw
            onClick={transformImage}
            style={{transform: toggle ? rotate : "none"}}
        >
            <Link href="/resume">
                <LinkStyle>
                <Home>
                    <Home className="notSelected">resume</Home>
                </Home>
                </LinkStyle>
            </Link>

            <Link href="/contact">
                <LinkStyle>
                <Home>
                    <Home className="notSelected">contact</Home>
                </Home>
                </LinkStyle>
            </Link>

            <Link href="/projects">
                <LinkStyle>
                <Home>
                    <Home className="notSelected">projects</Home>
                </Home>
                </LinkStyle>
            </Link>

        </Paw> 
    </NavContainer>
  </>;
};

export default NavBar;
