import styled from "styled-components";

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  border: 10px double aqua;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    border-radius: 10%;
    padding: 1rem;
    margin: 0;
  }
`;
const Bio = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  font-family: "Inconsolata", monospace;
  font-size: 1.5em;
  font-weight: bolder;
  @media only screen and (max-width: 600px) {
    padding: 0;
    margin: 0;
    width: 100%;
    font-size: 1.125em;
  }
`;

const Repo = styled.div`
  font-size: 1.25rem;
  padding: 1rem 1rem 1rem 1rem;
  font-family: "Inconsolata", monospace;
  @media only screen and (max-width: 600px) {
    font-size: 1.125;
    color: black;
  }
`;

const Link = styled.div`
  font-size: 1.25rem;
  padding: 1rem 1rem 1rem 1rem;
  font-family: "Inconsolata", monospace;
  @media only screen and (max-width: 600px) {
    font-size: 1.125;
    color: black;
  }
`;

export { Bio, Repo, Link, Container, Wrapper };
