import React from "react";

import Git from "../github";

import {
  HomeContainer,
  DashboardTitle,
  DashboardText,
  DashboardTitle2,
} from "./home.styles";

const HomePage = () => {
  return (
    <div>
      <HomeContainer>
        <DashboardTitle>
          <DashboardTitle2>hello</DashboardTitle2>
        </DashboardTitle>
        <DashboardText>
          My Name is <span style={{ fontWeight: "bold" }}>Kelly Sciandra</span>
          <br></br>
          <br></br>I like to create{" "}
          <span style={{ fontWeight: "bold" }}>simple</span> and{" "}
          <span style={{ fontWeight: "bold" }}>functional</span> digital
          environments using <span style={{ fontWeight: "bold" }}>React</span>,{" "}
          <span style={{ fontWeight: "bold" }}>Next.js</span>,
          <span style={{ fontWeight: "bold" }}>and Styled-Components</span>
        </DashboardText>
        <Git />
      </HomeContainer>
    </div>
  );
};

export default HomePage;
