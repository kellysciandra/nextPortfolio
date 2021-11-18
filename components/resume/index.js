import React, { useState } from "react";

import { ResumeContainer, Title, Description, MoreButton, VerticalText, SubText } from "./resume.styles"

const AboutPage = () => {
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [button1, setButton1] = useState(true)
    const [displayButton2, setDisplayButton2] = useState(false)

    const toggleButtonOne = () => {
        !toggle1 ? setToggle1(true) : null
        setButton1(false)
        setDisplayButton2(true)
    }

    const toggleButtonTwo = () => {
        !toggle2 ? setToggle2(true) : null
        setDisplayButton2(false)
    }

    return <>
        <ResumeContainer> 
            <Title>Front End Developer</Title>
            <Description>
                Experience in React and Next.js software development. <br/>
                Demonstrates a clear understanding of coding <br/>
                concepts and foundations professionally <br/>
                and within projects. Experience in Operations Management <br/>
                with knowledge of process optimization and team-building <br/>
                for a seasonal business that grosses more than $6 Million. <br/>
                An assertive and enthusiastic leader who excels at <br/>
                strategic planning, responsive design, and lending <br/>
                thoughtful technical insight throughout<br/>
                the product development cycle.
            </Description>
            <MoreButton style={{display: button1 ? "block" : "none"}} onClick={toggleButtonOne}>keep reading</MoreButton>
            <Description style={{display: toggle1 ? "block" : "none"}}>
        
                <VerticalText>Technical Skills</VerticalText>
                React w/ Hooks <br/>
                Next.Js <br/>
                Styled-Components <br/>
                Styled-System <br/>
                Storybook <br/>
                Strapi <br/>
                Asana <br/>
                Figma <br/>
            </Description>
            <MoreButton style={{display: displayButton2 ? "block" : "none"}} onClick={toggleButtonTwo}>keep reading</MoreButton>
            <Description style={{display: toggle2 ? "block" : "none"}}> 
                <VerticalText>Experience</VerticalText>
                MBS Highway <br/>
                <SubText>Software Developer  10/2020 - 09/2021</SubText>
                <SubText> 
                    - Converted applications front end <br/>
                    from C# to React. <br/>
                    - Built a site-wide component guide with Storybook 
                    for isolated testing and UI development. <br/>
                    - Created page mockups using Adobe XD. <br/>
                    - Developed custom focus styling for <br/>
                    proprietary calcs, enhancing the UX. 
                </SubText> <br/>
                Razu <br/>
                <SubText>Front End Developer  10/2020 - Present</SubText>
                <SubText> 
                    - Write reusable, testable, and efficient code <br/>
                    using Next.js and Styled-System. <br/>
                    - Collaborate with the other front end and <br/>
                    back end developers to establish objectives <br/>
                    and design more functional, cohesive code.
                </SubText>
            </Description>
            <Description style={{display: toggle2 ? "block" : "none"}}>
                <VerticalText>Education</VerticalText>
                Flatiron School <br/>
                <SubText>02/2018 - 02/2020</SubText>
                <SubText>Full Stack Web Development - Ruby on Rails, JavaScript, and React/Redux program.</SubText><br/>
                Berklee College of Music
                <SubText>05/2009 - 09/2011</SubText>
                <SubText>Jazz Studies</SubText> <br/>
                Suny Fredonia
                <SubText>09/2004 - 09/2006</SubText>
                <SubText>Music Buisness</SubText>
            </Description>
        </ResumeContainer>
        
    </>;
};

export default AboutPage;
