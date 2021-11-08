import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../../fish.png');
  @media only screen and (max-width: 600px) {
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

  }
`;

const Header = styled.div`
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 10%;
  @media only screen and (max-width: 600px) {
;
  }
`;

const Header1 = styled.div`
  border: 10px double aqua;
  font-weight: bold;
  color: black;
 
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

const Text2 = styled.div`
  margin: 0 0 0 40%;
  font-family: "Inconsolata", monospace;
  font-size: 5em;
  animation: blinker 3s linear infinite;
  font-weight: bold;  
  color: white;
  @media only screen and (max-width: 600px) {
   font-size: 2em;
  }
  
@keyframes blinker {
  50% {
    opacity: 0;
  }

}
`
export { Container, Wrapper, Text, Header, SubText, SubText2, Header1, Text2 };
