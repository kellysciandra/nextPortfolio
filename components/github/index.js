import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bio, Repo, Link, Container, Wrapper } from "./github.styles";

const Git = () => {
  const [bio, setBio] = useState([]);
  const [repo, setRepo] = useState([]);

  const [link, setLink] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/kellysciandra"
      );

      setBio(data.bio);
      setRepo(data.repos_url);

      setLink(data.html_url);
    };
    search();
  }, []);

  return (
    <div>
      <section id="card">
        <Container>
          <Wrapper>
            <Link>
              <a href={link}>github</a>
            </Link>
            <Bio> {bio} </Bio>

            <Repo>
              <a href={repo}>repos</a>
            </Repo>
          </Wrapper>
        </Container>
      </section>
    </div>
  );
};

export default Git;
