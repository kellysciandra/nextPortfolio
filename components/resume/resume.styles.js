import styled from "styled-components";

const ResumeContainer = styled.div`
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
    margin: 0em;
    margin-top: 18em;
  }
`   

const Title = styled.div`
    padding: 1em;
    font-weight: bold;
    letter-spacing: 20px;
    font-size: 1.5em;
`

const Description = styled.div`
    padding: 1em;
    margin: 1em;
    font-size: 1.25em;
    position: relative;
    border: 2px double;
`

const MoreButton = styled.button`
    font-family: "Inconsolata", monospace;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    width: 25%;
    border-radius: 3px;
    cursor: pointer;
    border-radius: 5px;
    filter: blur(0.01em);
    animation: shake 2.5s linear forwards;
    background-color: oldlace;
    font-weight: bold;
    font-style: italic;
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