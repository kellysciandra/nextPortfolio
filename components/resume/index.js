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
                Demonstrates a clear understanding of coding concepts <br/>
                and foundations professionally and within projects.  <br/>
                Experience in Operations Management with knowledge of <br/>
                process optimization and team-building for a seasonal business <br/>
                that grosses more than $6 Million. An assertive and  <br/>
                enthusiastic leader who excels at strategic planning, <br/>
                responsive design, and lending thoughtful technical <br/>
                insight throughout  the product development cycle.<br/>
               
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
                <span style={{fontWeight: "bolder"}}>MBS Highway </span><br/>
                <SubText>Software Developer  11/2020 - 10/2021</SubText>
                <SubText> 
                    - Converted applications front end 
                    from C# to React. <br/>
                    - Built a site-wide component guide with Storybook <br/>
                    for isolated testing and UI development. <br/>
                    - Created page mockups using Adobe XD. <br/>
                    - Developed custom focus styling for <br/>
                    proprietary calcs, enhancing the UX. 
                </SubText> <br/>
                <span style={{fontWeight: "bolder"}}>Razu</span><br/>
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
                <span style={{fontWeight: "bolder"}}>Flatiron School </span> <br/>
                <SubText>02/2018 - 02/2020</SubText>
                <SubText>Full Stack Web Development - Ruby on Rails, JavaScript, <br/> and React/Redux program.</SubText><br/>
                <span style={{fontWeight: "bolder"}}>Berklee College of Music </span>
                <SubText>05/2009 - 09/2011</SubText>
                <SubText>Jazz Studies</SubText> <br/>
                <span style={{fontWeight: "bolder"}}>SUNY Fredonia </span>
                <SubText>09/2004 - 09/2006</SubText>
                <SubText>Music Buisness</SubText>
            </Description>
        </ResumeContainer> 
    </>;
};

export default AboutPage;
