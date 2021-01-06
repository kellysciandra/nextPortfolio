import React from "react";

import { Container, Wrapper, Text, Header, Header1 } from "./contact.styles";
const ContactsPage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Header1>currently available via</Header1>
          </Header>
          <Text>
            <a href="mailto:kellysciandradev@icloud.com">email </a>
            <span
              style={{ fontSize: ".5em", color: "black", fontWeight: "bold" }}
            >
              {" "}
              <br></br>
              kellysciandradev@gmail.com
            </span>
          </Text>
          <Text>
            <a href="https://www.linkedin.com/in/kelly-sciandra-464b371a0/">
              linkedIn
            </a>
            <span
              style={{ fontSize: ".5em", color: "black", fontWeight: "bold" }}
            >
              {" "}
              <br></br>
              /kellysciandra
            </span>
          </Text>
          <Text>
            <a href="https://www.instagram.com/kellynobody/">instagram </a>
            <span
              style={{ fontSize: ".5em", color: "black", fontWeight: "bold" }}
            >
              {" "}
              <br></br>
              @kellynobody
            </span>
          </Text>
          <Text>
            <a href="https://open.spotify.com/artist/0JyCM9EwjQZZzQPGTSM1qc">
              spotify
            </a>
            <span
              style={{ fontSize: ".5em", color: "black", fontWeight: "bold" }}
            >
              {" "}
              <br></br>
              @kellynobody /<br></br> @kellysciandra /<br></br> @thereignofkindo
            </span>
          </Text>
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactsPage;
