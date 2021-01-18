import styled from "styled-components";

const HomeContainer = styled.div`
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0 5rem 0;
  height: 90vh;
  @media only screen and (max-width: 600px) {
    background-color: aquamarine;
    margin-top: 0;
    border: 1px solid;

    justify-content: left;
    align-items: left;
  }
`;

const DashboardTitle = styled.div`
  font-family: "Inconsolata", monospace;
  margin: 0 45% 0 0;
  font-size: 1.25rem;

  background-color: floralwhite;
  @media only screen and (max-width: 600px) {
    margin-top: 40%;
  }
`;

const DashboardTitle2 = styled.div`
  font-weight: bold;
  color: black;
  background-color: aquamarine;
  @media only screen and (max-width: 600px) {
    border: 10px double aqua;
  }
`;

const DashboardText = styled.div`
  text-align: left;
  font-family: "Inconsolata", monospace;
  font-size: 1.5rem;

  width: 50%;
  margin: 2rem 0 0 0;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    width: 70%;
    margin: 2rem 0 0 0;
  }
`;

export { HomeContainer, DashboardTitle, DashboardText, DashboardTitle2 };
