import styled from "styled-components";

const NavContainer = styled.div`
    position: fixed;
    transition: 0.25s ease-in-out;
    background-size: 800px 10px;
    height: 150vh;
    width: 100vw;
    background-image: url('../../fish.png');
    cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: flex;
    background-size: 900px 10px;
    height: 150vh;
    width: 100vw;
    background-image: url('../../fish4.png');
  }
`;

const LinkStyle = styled.div`
    display: flex;
    font-weight: bold;
    margin: 0 0 0 4rem;
    letter-spacing: .2em;
    cursor: pointer;
`;

const Home = styled.div`
    .logo {
        border-radius: 5px;
        padding: 3em;
        filter: blur(0.01em);
        animation: shake 2.5s linear forwards;
        position: relative;
        font-size: 5em;
        text-transform: uppercase;
        text-shadow: 0 0 0.15em #1da9cc;
        font-weight: bold;
        font-style: italic;
    }
    .notSelected {
        font-family: "Inconsolata", monospace;
        filter: drop-shadow(16px 16px 20px #1da9cc);
        position: relative;
        font-size: 1.5em;
        text-shadow: 0 0 0.25em whitesmoke;
        font-style: italic;
        color: whitesmoke;
        font-size: 2em;
    }

    @media only screen and (max-width: 600px) {
        margin: 0;
        cursor: pointer;
        .logo {
            padding: 0;
            margin: 2em;
        }
    }
`;

const Paw = styled.div`
    position: absolute;
    background-size: 100px 100px;
    z-index: 1;
    height: 200vh;
    width: 50vw;
    padding: 25px;
    background-image: url('../../paw.png');
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out 0s;
`
export { NavContainer, LinkStyle, Home, Paw };
