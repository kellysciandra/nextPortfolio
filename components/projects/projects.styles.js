import styled from "styled-components";

const Container = styled.div`
    font-family: "Inconsolata", monospace;
    display: flex;
    flex-direction: column;
    float: right;
    margin: 10em;
    z-index: 1;
    position: relative;
    background-image: url('../../fish.png');
    background-size: 1700px 10px;
    border-radius: 10px;
  @media only screen and (max-width: 600px) {
    display: flex;
    background-size: 900px 10px;
    background-image: url('../../fish4.png');
    width: 100%;
    margin: 18em 0 0 5em;
    /* margin: 18em 20em  0 1em; */
  }
`;

const Wrapper = styled.div`
@media only screen and (max-width: 600px) {
    /* width: 50%;
    margin-left: 20em; */
  } 
`

const Header = styled.div`
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  font-size: 2.5rem;
  /* margin: 10%; */
  @media only screen and (max-width: 600px) {
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
    /* margin: 5% 0 0 5%; */
  }
`;

const SubText2 = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1em;
  @media only screen and (max-width: 600px) {
    /* margin: 0 0 0 0; */
  }
`;

const SubText3 = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1em;
  font-family: 'Orbitron', sans-serif;
  color: white;

  @media only screen and (max-width: 600px) {
    /* margin: 0 0 0 0; */

  }
`;

const Text2 = styled.div`

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

const LinkWrapper = styled.div`
    background: none;
    margin: 5em; 
    .vid {
    width: 750px;
    object-fit: cover;
    z-index: -100; 
        @media only screen and (max-width: 600px) {
            display: none;
        }   
    }
`
export { Container, Wrapper, Header, SubText, SubText2, SubText3, Header1, Text2, LinkWrapper };
