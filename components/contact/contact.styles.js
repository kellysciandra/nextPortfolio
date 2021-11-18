import styled from "styled-components";

const Container = styled.div`
    z-index: 1;
    position: relative;
    background-image: url('../../fish4.png');
    background-size: 1700px 10px;
    border-radius: 5px;
    float: right;
    margin: 20em;
    
    @media only screen and (max-width: 600px) {
        background-size: 900px 10px;
        background-image: url('../../fish4.png');
        width: 100%;
        margin: 0;
        margin-top: 18em;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 10px double greenyellow;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Text = styled.div`
    padding: 1rem;
    font-family: "Inconsolata", monospace;
    font-size: 3em;
    border-right: 1px double greenyellow;

  @media only screen and (max-width: 600px) {
    border-bottom: 1px double greenyellow;
  }
`;

const Header = styled.div`
    font-family: "Inconsolata", monospace;
    font-size: 1.25rem;
`;

const Header1 = styled.div`
    border: 10px double aqua;
    border-radius: 20px;
    padding: 0.25em;
    margin-bottom: 10%;
    font-weight: bolder;
`;
export { Container, Wrapper, Text, Header, Header1 };
