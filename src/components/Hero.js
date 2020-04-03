import React from "react";
import styled from "styled-components";

const Hero = props => {
  return (
    <HeroContainer>
      <img src={props.background_image} alt={props.name} />
      <h3 style={{ color: props.dominant_color }}>{props.name}</h3>
    </HeroContainer>
  );
};

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

const HeroContainer = styled.div`
  grid-area: hero;
  display: grid;
  grid:
    "img" min-content
    "title" min-content
    / auto;

  overflow: hidden;

  img {
    grid-area: img;
    grid-row: 1 / -1;
  }

  h3 {
    font-size: 23pt;
    margin-bottom: 0;
    text-align: center;
    width: 100%;

    grid-area: title;
    grid-row: 1 / -1;
    justify-self: center;
    align-self: end;
    animation: titleAppearMobile 2s ease-out forwards,
      titleBackground 2s 2s ease-out forwards;
    @media only screen and (min-width: 650px) {
      font-size: 48pt;
      margin: 0 20px;
      grid-row: 1;
      animation: titleAppearTablet 2s ease-out forwards,
        titleBackground 2s 2s ease-out forwards;
      margin-top: 0;
      height: 100%;
    }
  }

  @keyframes titleAppearMobile {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes titleAppearTablet {
    0% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes titleBackground {
    0% {
      background: rgba(179, 130, 21, 0);
    }
    100% {
      background: rgba(179, 130, 21, 0.4);
    }
  }
`;

export default Hero;
