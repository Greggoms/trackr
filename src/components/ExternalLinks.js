import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ExternalLinks = props => {
  return (
    <ExternalLinksContainer>
      {props.website && (
        <a href={props.website}>
          <h3>
            <FontAwesomeIcon icon={faGlobe} />
          </h3>
          <p>Stay updated on their website!</p>
        </a>
      )}

      {props.reddit_url && (
        <a href={props.reddit_url}>
          <h3>
            <FontAwesomeIcon icon={faRedditAlien} />
          </h3>
          <p>View the Community!</p>
        </a>
      )}
    </ExternalLinksContainer>
  );
};

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

const ExternalLinksContainer = styled.div`
  grid-area: external;
  display: flex;
  text-align: center;
  max-width: 600px;
  margin: 25px auto 0 auto;

  @media only screen and (min-width: 1200px) {
    margin: 0;
    text-align: left;
    flex-direction: column;
    justify-self: flex-start;
  }

  h3 {
    font-size: 23pt;
    margin: 0;
  }

  p {
    margin: 5px 0;
  }

  a {
    color: #f9f9f9;
    padding: 15px;
    transition: all 1s ease;

    &:hover {
      color: #59c1d9;
      border-radius: 10px;
    }

    @media only screen and (min-width: 1200px) {
      background: rgba(51, 51, 51, 0.9);
      margin-bottom: 10px;
    }
  }
`;

export default ExternalLinks;
