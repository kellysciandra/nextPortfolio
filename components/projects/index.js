import React from "react";
import { isMobile } from 'react-device-detect';

import {
  Container,
  Header,
  SubText,
  SubText2,
  LinkWrapper
} from "./projects.styles";

const ProjectsPage = () => {
    return <>
        <Container>
            <Header>Inventory Management Software
                <a href="https://do-strapi-frontend.vercel.app/">
                    {" "}
                    <span style={{ fontSize: '.45em' }}> here </span>{" "}
                </a>
            </Header> 
            <SubText2>
                A project to help manage Inventory, email stock reports, and place daily orders. 
            </SubText2>
            <LinkWrapper>
                <video 
                    controls src={"/Test.mp4"} 
                    className='vid'
                    autoplay= { isMobile ? false : true }
                    loop 
                />
            </LinkWrapper>
            <Header>Employee Onboarding Application
            <a href="https://nancys.dev"> {" "}
              <span style={{ fontSize: '.55em' }}> here </span>{" "}
            </a>
            </Header>
            <SubText2>
              A project to assist in onboarding employees.
            </SubText2>
            <LinkWrapper>
                <video
                    className='vid'
                    controls src={"/Test2.mp4"} 
                    autoplay= { isMobile ? false : true }
                    loop 
                />
            </LinkWrapper>
      </Container>
    </>;
};

export default ProjectsPage;
