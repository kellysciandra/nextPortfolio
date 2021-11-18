import styled from "styled-components";

const Container = styled.div`
    font-family: "Inconsolata", monospace;
    float: right;
    margin: 10em;
    z-index: 1;
    position: relative;
    background-image: url('../../fish.png');
    background-size: 1700px 10px;
    border-radius: 10px;
  @media only screen and (max-width: 600px) {
    background-size: 900px 10px;
    background-image: url('../../fish4.png');
    width: 100%;
    margin: 18em 0 0 0;
    text-align: center;
  }
`;

const Header = styled.div`
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  font-size: 2.5rem;
`;

const Header1 = styled.div`
  border: 10px double aqua;
  font-weight: bold;
  color: black;
`;

const SubText = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const SubText2 = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1em;
`;

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
export { Container, Header, SubText, SubText2, Header1, LinkWrapper };
