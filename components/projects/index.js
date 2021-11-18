import React from "react";

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
                    <span style={{ fontSize: '.5em', opacity: ".5" }}> here </span>{" "}
                </a>
            </Header> 
            <SubText2>
                A project to help manage Inventory, email stock reports, and place daily orders. 
            </SubText2>
            <LinkWrapper>
                <video 
                    controls src={"/Test.mp4"} 
                    className='vid'
                    autoPlay
                    loop 
                />
            </LinkWrapper>
            <SubText>Employee Onboarding Application
            <a href="https://nancys.dev"> {" "}
              <span style={{ fontSize: '.6em', opacity: ".5" }}> here </span>{" "}
            </a>
            </SubText>
            <SubText2>
              A project to assist in onboarding employees.
            </SubText2>
            <LinkWrapper>
                <video
                    className='vid'
                    controls src={"/Test2.mp4"} 
                    autoPlay
                    loop 
                />
            </LinkWrapper>
      </Container>
    </>;
};

export default ProjectsPage;
