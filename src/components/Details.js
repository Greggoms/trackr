import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faThumbsUp,
  faCalendarAlt,
  faPuzzlePiece
} from "@fortawesome/free-solid-svg-icons";

const Details = props => {
  return (
    <DetailsContainer>
      <section>
        <h3>
          <FontAwesomeIcon icon={faThumbsUp} />
        </h3>
        <p>{`${props.metacritic}% ${
          props.metacritic >= 90 ? "(Mostly Positive)" : "(Positive)"
        }`}</p>
      </section>
      <section>
        <h3>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </h3>{" "}
        <p>{props.released}</p>
      </section>

      {props.game_series_count > 1 && (
        <section>
          <h3>
            <FontAwesomeIcon icon={faLayerGroup} />
          </h3>
          <p>{props.game_series_count} other titles!</p>
        </section>
      )}

      {props.esrb_rating && (
        <section>
          <div>
            <h3>
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </h3>
            <p>{props.esrb_rating.name}</p>
          </div>
        </section>
      )}
    </DetailsContainer>
  );
};

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

const DetailsContainer = styled.article`
  grid-area: details;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  section {
    width: 45%;
    max-width: 120px;
    height: 120px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50%;
    padding: 10px;

    transition: all 2s ease-out;

    @media only screen and (min-width: 1200px) {
      margin-bottom: 15px;
    }
    h3 {
      font-size: 30pt;
      margin: 0;
    }

    p {
      margin: 0;
    }

    @media only screen and (min-width: 650px) {
      background: rgba(51, 51, 51, 0.9);
    }
  }
  @media only screen and (min-width: 650px) {
    justify-content: space-evenly;
    align-items: center;
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Details;
