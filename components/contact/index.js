import React from "react";

import { Container, Wrapper, Text } from "./contact.styles";

const ContactsPage = () => {
  return <>
        <Container>
            <Wrapper>
                <Text>
                    <a href="mailto:kellysciandradev@icloud.com"> EMAIL </a>
                </Text>
                <Text>
                    <a href="https://www.linkedin.com/in/kelly-sciandra-464b371a0/"> linkedIN </a>
                </Text>
                <Text>
                    <a href="https://www.instagram.com/kellynobody/"> Instagram </a>
                </Text>
            </Wrapper>
        </Container>
    </>;
};

export default ContactsPage;

