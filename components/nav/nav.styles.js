import styled from "styled-components";

const NavContainer = styled.div`
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    position: fixed;
    height: 150vh;
    width: 100vw;
    top: 2em;

    .paw {
        left: 5em;
        width: 10%;
        height: 10%;
        border: 1px solid rgb(255,0,27, .1);
    }

    @media only screen and (max-width: 600px) {
        height: 150vh;
        width: 100vw;
        margin: 0;
        position: absolute;
        .paw {
            top: -3em;
            width: 35%;
            margin-top: 12em;
        }
    }
`;

const LinkStyle = styled.div`
    margin: 0 0 0 3rem;
    letter-spacing: .2em;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        margin: 0;
    }
`;

const Home = styled.div`
    .logo {
        letter-spacing: 20px;
        font-size: 2em;
        color: rgb(255,0,27);
        top: 20;
    }
    .notSelected {
        position: relative;
        font-size: 1.5em;
        font-weight: 100;
        color: rgb(255,0,27);
        font-size: 2em;
    }

    @media only screen and (max-width: 600px) {
        margin: 0;
        cursor: pointer;
        .notSelected {
            padding: 0;
            margin: 0 0 0 1.25em;
        }
    }
`;

const Paw = styled.div`
    position: absolute;
    background-size: 75px 75px;
    height: 200vh;
    width: 50vw;
    padding: 25px;
    background-image: url('../../paw.png');
    background-repeat: no-repeat;
    top: 5em;
`;

const ContactLinks = styled.div`
    .links {
        position: relative;
        float: right;
        right: 2em;
        top: -2em;
        color: red;
        padding: 10px;
    }
    @media only screen and (max-width: 600px) {
        cursor: pointer;
        .links {
            display: fixed;
            margin-top: 2em;
        }
    }
`

export { NavContainer, LinkStyle, Home, Paw, ContactLinks };
