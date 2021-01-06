import styled from "styled-components";

const Container = styled.div`
  background-color: aquamarine;
  display: flex;
  margin: 5rem 0 5rem 0;
  height: 90vh;
  @media only screen and (max-width: 600px) {
    background-color: aquamarine;
    width: 100%;
    height: 110vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 5em 1em 10em 25em;
  @media only screen and (max-width: 600px) {
    margin: 0;
    align-items: left;
    justify-content: left;
  }
`;

const Text = styled.div`
  padding: 1rem;
  font-family: "Inconsolata", monospace;
  font-size: 2em;

  span {
    br {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
    padding: 1rem;
    span {
      br {
        display: initial;
      }
    }
  }
`;

const Header = styled.div`
  font-family: "Inconsolata", monospace;
  font-size: 1.25rem;
  background-color: aquamarine;

  @media only screen and (max-width: 600px) {
    margin-top: 5em;
  }
`;

const Header1 = styled.div`
  border: 10px double aqua;
  border-radius: 20px;
  padding: 0.25em;
  margin-bottom: 10%;
  font-weight: bolder;

  @media only screen and (max-width: 600px) {
    border: 10px double aqua;
    border-radius: 10px;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;
export { Container, Wrapper, Text, Header, Header1 };
