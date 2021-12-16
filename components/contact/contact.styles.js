import styled from "styled-components";

const Container = styled.div`
    z-index: 1;
    position: relative;
    float: right;
    margin: 20em;
    font-family: Helvetica, Sans-Serif;
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin: 0;
        margin-top: 18em;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 4px double rgb(255,0,27);

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Text = styled.div`
    padding: 1rem;
    font-size: 3em;
    font-weight: 100;
    border-right: .5px double rgb(255,0,27);
    color: rgb(255,0,27);
  @media only screen and (max-width: 600px) {
    border-bottom: 1px double rgb(255,0,27);
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
