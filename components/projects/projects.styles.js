import styled from "styled-components";

const Container = styled.div`
  background-color: aquamarine;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 0 5rem 0;
  height: 110vh;
  @media only screen and (max-width: 600px) {
    background-color: aquamarine;
    justify-content: left;
    align-items: left;
    height: 130vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 25%;
  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`;

const Text = styled.div`
  margin: 0 0 0 10%;
  font-family: "Inconsolata", monospace;
  font-size: 1.5em;
  width: 75%;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

const Header = styled.div`
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 10%;
  @media only screen and (max-width: 600px) {
    margin: 5% 0 10% 0;
    width: 95%;
  }
`;

const Header1 = styled.div`
  border: 10px double aqua;
  font-weight: bold;
  color: black;
  background-color: aquamarine;
`;

const SubText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    margin: 5% 0 0 5%;
  }
`;

const SubText2 = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 1rem 1rem 1rem;
  @media only screen and (max-width: 600px) {
    margin: 0 0 0 0;
  }
`;

export { Container, Wrapper, Text, Header, SubText, SubText2, Header1 };
