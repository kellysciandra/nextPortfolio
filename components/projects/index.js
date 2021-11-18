import React from "react";
import ReactPlayer from 'react-player';


import {
  Container,
  Wrapper,
  Header,
  Header1,
  SubText,
  SubText2,
  SubText3,
  LinkWrapper
} from "./projects.styles";
const ProjectsPage = () => {
  return (
    <>
      <Container>
          <Wrapper>
            <Header>Inventory Management Software
            <a href="https://do-strapi-frontend.vercel.app/">
              {" "}
              <span style={{ fontSize: '.5em', opacity: ".5" }}>
              here
              </span>{" "}
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

            <a href="https://nancys.dev">
              {" "}
              <span style={{ fontSize: '.5em', opacity: ".5" }}>
              here
              </span>{" "}
            </a>
            </SubText>
            <SubText2>
              A project to assist in onboarding employees.
            </SubText2>

            <LinkWrapper  >
                <video
                    className='vid'
                    controls src={"/Test2.mp4"} 
                    autoPlay
                    loop 
                />
            </LinkWrapper>
            </Wrapper>
      </Container>
    </>
  );
};

export default ProjectsPage;
