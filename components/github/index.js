import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bio, Repo, Link, Wrapper } from "./github.styles";

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

  return <>
        <div>
            <section id="card">
                <Wrapper>
                    <Link>
                    <a href={link}>Github</a>
                    </Link>
                    <Bio> Front End Developer </Bio>
                    <Repo>
                    <a href={"https://github.com/kellysciandra?tab=repositories"}>Repos</a>
                    </Repo>
                </Wrapper>
            </section>
        </div>
    </>;
};

export default Git;
