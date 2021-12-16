import styled from "styled-components";

const NavContainer = styled.div`
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    position: fixed;
    height: 150vh;
    width: 100vw;
    cursor: pointer;
    top: 2em;
    
    .paw {
        float: right;
        display: flex;
        justify-content: right;
        align-items: right;
        flex-direction: column;
        left: 5em;
        width: 10%;
        height: 10%;
        border: 1px solid rgb(255,0,27, .1);
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        height: 150vh;
        width: 100vw;
        margin: 0;

        .paw {
            top: -3em;
            width: 35%;
            margin-top: 10em;
        }
    }
`;

const LinkStyle = styled.div`
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    display: flex;
    font-weight: bold;
    margin: 0 0 0 3rem;
    letter-spacing: .2em;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        margin: 0;
    }
`;

const Home = styled.div`
    .logo {
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
        position: relative;
        font-weight: lighter;
        letter-spacing: 20px;
        font-size: 2em;
        color: rgb(255,0,27);
        top: 20;
    }
    .notSelected {
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
        font-weight: 300;
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
    z-index: 1;
    height: 200vh;
    width: 50vw;
    padding: 25px;
    background-image: url('../../paw.png');
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out 0s;
    top: 5em;
`

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
            padding: 0;
            margin: .5em 1em 0 0;
        }
    }
`

export { NavContainer, LinkStyle, Home, Paw, ContactLinks };
