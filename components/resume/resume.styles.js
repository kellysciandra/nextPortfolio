import styled from "styled-components";

const ResumeContainer = styled.div`
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    display: flex;
    flex-direction: column;
    float: right;
    margin: 10em 15em 0 0;
    width: 45%;
    z-index: 1;
    position: relative;

    @media only screen and (max-width: 600px) {
    display: flex;
    margin: 0em;
    margin-top: 18em;
    width: 100%;
    height: 150vh;
  }
`   
const Title = styled.div`
    padding: 1em;
    letter-spacing: 20px;
    font-size: 1.5em;
    color: rgb(255,0,27);
`
const Description = styled.div`
    padding: 1em;
    margin: 1em;
    font-size: 1.25em;
    border: 2px solid rgb(255,0,27);;
    color: rgb(255,0,27);
`
const MoreButton = styled.button`
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    margin: 1em;
    padding: .25em 1em;
    width: 25%;
    border: 1px solid rgb(255,0,27);
    background-color: white;
    color: rgb(255,02,27);
    cursor: pointer;
`
const VerticalText = styled.div`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    float: right;
    font-weight: bold;
`
const SubText = styled.div`
    font-size: .75em;
    padding: 3px;
`

export { ResumeContainer, Title, Description, MoreButton, VerticalText, SubText  };