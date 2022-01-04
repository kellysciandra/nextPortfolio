import Link from "next/link";
import { useState } from "react";
import { isMobile } from 'react-device-detect';
import { NavContainer, LinkStyle, Home, Paw, ContactLinks } from "./nav.styles";
import { FiLinkedin, FiMail } from 'react-icons/fi';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const rotate = !isMobile ? "rotate(5deg)" : "rotate(5deg)"
    const transformImage = () => {
        setToggle(!toggle)
    };

    return <>
        <NavContainer>
            <Link href="/">
                <LinkStyle>
                <Home>
                    <Home className="logo">Kelly Sciandra</Home>
                </Home>
                </LinkStyle>
            </Link>
            <Paw
                onClick={transformImage}
                style={{transform: toggle ? rotate : "none"}}
                className="paw"
            >
                <Link href="/resume">
                    <LinkStyle>
                    <Home>
                        <Home className="notSelected">Resume</Home>
                    </Home>
                    </LinkStyle>
                </Link>
                <Link href="/projects">
                    <LinkStyle>
                    <Home>
                        <Home className="notSelected">Projects</Home>
                    </Home>
                    </LinkStyle>
                </Link>
            </Paw>
            <ContactLinks>
                <a className="links" href="mailto:kellysciandradev@icloud.com"> 
                    <FiMail style={{ strokeWidth: .8}} size={40}/>
                </a>
            </ContactLinks> 
            <ContactLinks>
                <a  className="links" href="https://www.linkedin.com/in/kelly-sciandra-464b371a0/"> 
                    <FiLinkedin style={{ strokeWidth: .8}} size={40}/>
                </a>
            </ContactLinks>  
        </NavContainer>

    </>;
};

export default NavBar;
