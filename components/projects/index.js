import React from "react";

import {
  Container,
  Wrapper,
  Text,
  Header,
  Header1,
  SubText,
  SubText2,
} from "./projects.styles";
const ProjectsPage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Header1>current deployed projects</Header1>
          </Header>
          <Text>
            <SubText>Shopify Store</SubText>
            <a href="http://itsjoya.com/">
              {" "}
              <span style={{ opacity: ".5", marginLeft: "5%" }}>
                itsjoya.com
              </span>{" "}
            </a>
            <SubText2>
              Itsjoya is a home and gift design shop based in Brooklyn, NY. We
              are a collective of designers and artists working together to
              curate and source creative and quality home goods at affordable
              prices. We encourage collaborations, and we would love to hear
              from talented designers who are looking for a platform to sell or
              showcase their work.
            </SubText2>
          </Text>

          <Text>
            <SubText>Shopify Store</SubText>
            <a href="https://frontenddev.academy/">
              {" "}
              <span style={{ opacity: ".5", marginLeft: "5%" }}>
                frontenddev.academy
              </span>{" "}
            </a>
            <SubText2>
              Where to begin if you're new to programming? HERE! Knowledge of
              front end languages are frameworks are essential parts of the new
              developer's toolbox. Featuring HTML5, CSS3, JavaScript, jQuery,
              Bootstrap, Node.js, React.js
            </SubText2>
          </Text>

          <Text>
            <SubText>Showcase</SubText>
            <a href="https://unreleased.dev">
              {" "}
              <span style={{ opacity: ".5", marginLeft: "5%" }}>
                unreleased.dev
              </span>{" "}
            </a>
            <SubText2>
              Unreleased projects by new developers. Click above to submit your
              project
            </SubText2>
          </Text>
        </Wrapper>
      </Container>
    </>
  );
};

export default ProjectsPage;
