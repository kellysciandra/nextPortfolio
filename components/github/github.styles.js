import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  display: flex;
  flex-direction: column;
  align-items: center;
  float: right;
  width: 50%;
  padding: 20px;
  margin: 15em 15em 0 0;
  border: 4px double rgb(255,0,27);
  border-radius: 25px;
  color: rgb(255,0,27);

  @media only screen and (max-width: 600px) {
    border: 4px double rgb(255,0,27);;
    border-radius: 10px;
    padding: 20px;
    margin: 20em 2em 0 0;
    width: 80%;
  }
`;

const Link = styled.div`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  color: rgb(255,0,27);
  font-size: 1.25rem;
  font-weight: lighter;
  padding: 1rem 1rem 1rem 1rem;
`;

const Bio = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  font-weight: 300;
  font-size: 3em;
  font-weight: lighter;
 
  @media only screen and (max-width: 600px) {
    font-size: 2.5em;
    margin-left: .5em;
  }
`;

const Repo = styled.div`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  font-weight: 300;
  color: rgb(255,0,27);
  font-size: 1.25rem;
  padding: 1rem 1rem 1rem 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.125;
    font-weight: lighter;
  }
`;



export { Bio, Repo, Link, Wrapper };
