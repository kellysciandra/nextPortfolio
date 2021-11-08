import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, Wrapper, Text, Header, Header1 } from "./contact.styles";
import { SubText } from "../resume/resume.styles";
const ContactsPage = () => {
  return (
    <>
      <Container>
        <Wrapper>
            <Text>
                <a href="mailto:kellysciandradev@icloud.com">
                    EMAIL
                <SubText>
                    EMAIL EMAIL EMAIL EMAIL
                </SubText>
                </a>
            </Text>

            <Text><a href="https://www.linkedin.com/in/kelly-sciandra-464b371a0/"> 
                linkedIN
                <SubText>
                    linkedIN linkedIN linkedIN linkedIN
                </SubText>
                </a>
            </Text>

            <Text><a href="https://www.instagram.com/kellynobody/"> 
                Instagram
                <SubText>
                    Instagram Instagram Instagram Instagram
                </SubText>
                </a>
            </Text>

        </Wrapper>

      </Container>
    </>
  );
};

export default ContactsPage;

