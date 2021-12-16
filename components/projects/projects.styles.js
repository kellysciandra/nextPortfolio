import styled from "styled-components";

const Container = styled.div`
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    float: right;
    font-weight: lighter;
    margin: 10em;
    z-index: 1;
    position: relative;
    border-radius: 10px;
    width: 55%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 20em 0 0 0;
    text-align: center;
  }
`;

const Header = styled.div`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  font-weight: lighter;
  font-size: 2.5rem;
  color: rgb(255,0,27);
`;

const Header1 = styled.div`
    font-weight: lighter;
 
`;

const SubText = styled.div`
  font-size: 2rem;
  font-weight: lighter;
  color: rgb(255,0,27);
`;

const SubText2 = styled.div`
  font-size: 1rem;
  color: rgb(255,0,27);
  font-weight: lighter;
  margin-top: 1em;
`;

const LinkWrapper = styled.div`
    background: none;
    margin: 4em 0 2em 0; 

    .vid {
    width: 900px;

    z-index: -100; 
        @media only screen and (max-width: 600px) {
            display: none;
        }   
    }
`
export { Container, Header, SubText, SubText2, Header1, LinkWrapper };
