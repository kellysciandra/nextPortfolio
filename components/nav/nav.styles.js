import styled from "styled-components";

const NavContainer = styled.div`
  position: fixed;
  top: 75px;
  width: 100%;
  height: 5rem;
  transition: 0.25s ease-in-out;

  @media only screen and (max-width: 600px) {
    display: flex;
    /* flex-direction: row; */
    justify-content: space-evenly;
    top: 0;
    background-color: aquamarine;
    border-bottom: 5px solid white;
  }
`;

const LinkStyle = styled.div`
  display: flex;
  font-weight: bold;
  margin: 1rem 0 0 5rem;
  padding: 20px;
  text-decoration: none;

  cursor: pointer;
  font-family: "Inconsolata", monospace;
  font-size: 1.5em;

  @media only screen and (max-width: 600px) {
    margin: 0;
    /* opacity: 0.8; */
  }
`;

const Home = styled.div`
  font-family: "Inconsolata", monospace;

  .inside {
    border: 10px double aqua;
    font-weight: bolder;
    color: black;
    background-color: aquamarine;
  }
  @media only screen and (max-width: 600px) {
    border: none;

    .inside {
      color: black;

      border: none;
    }
  }
`;

export { NavContainer, LinkStyle, Home };
