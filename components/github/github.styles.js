import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  float: right;
  width: 50%;
  padding: 15px;
  margin: 10em;
  font-weight: bold;
  border: 15px solid;
  border-radius: 15px;
  background-image: url('../../fish.png');
  background-size: 1700px 10px;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    border: none;
    background-image: url('../../fish4.png');
    background-size: 100px 100px;
    border-radius: 10px;
    padding: 0;
    margin-top: 20em;
    width: 10vw;
  }
`;

const Link = styled.div`
  animation: ease-in 1s alternate infinite;
  color: white;
  font-size: 1.25rem;
  padding: 1rem 1rem 1rem 1rem;
  font-family: "Inconsolata", monospace;
  @media only screen and (max-width: 600px) {
  
    color: white;
  }
`;

const Bio = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  font-family: "Inconsolata", monospace;
  font-size: 5em;
  font-weight: bolder;
  align-content: center;
  @media only screen and (max-width: 600px) {
    font-size: 2.5em;

  }
`;

const Repo = styled.div`
  animation: blinker 3s alternate infinite;
  color: white;
  font-size: 1.25rem;
  padding: 1rem 1rem 1rem 1rem;
  font-family: "Inconsolata", monospace;
  @media only screen and (max-width: 600px) {
    font-size: 1.125;
    color: white;
  }
`;



export { Bio, Repo, Link, Wrapper };
