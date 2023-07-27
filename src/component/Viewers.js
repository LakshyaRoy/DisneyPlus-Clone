import React from "react";
import { styled } from "styled-components";
import Disney from "../images/images/viewers-disney.png";
import Pixar from "../images/images/viewers-pixar.png";
import Marvel from "../images/images/viewers-marvel.png";
import StarWar from "../images/images/viewers-starwars.png";
import National from "../images/images/viewers-national.png";
import DisneyVideo from "../videos/videos/disney.mp4";
import PixarVideo from "../videos/videos/pixar.mp4";
import MarvelVideo from "../videos/videos/marvel.mp4";
import StarWarVideo from "../videos/videos/star-wars.mp4";
import NationalVideo from "../videos/videos/national.mp4";

const Viewers = () => {
  const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 25px;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  `;
  const Wrap = styled.div`
    padding-top: 56.25%;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
      inset: 0px;
      display: block;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      position: absolute;
      transition: opacity 500ms ease-in-out 0s;
      width: 100%;
      z-index: 1;
      top: 0;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      z-index: 0;
      opacity: 0;
    }

    &:hover {
      box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 /73%) 0px 16px 10px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);

      video {
        opacity: 1;
      }
    }
  `;

  return (
    <Container>
      <Wrap>
        <img src={Disney} alt="" />
        <video autoPlay loop={true} muted playsInline={true}>
          <source src={DisneyVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={Pixar} alt="" />
        <video autoPlay loop={true} muted playsInline={true}>
          <source src={PixarVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={Marvel} alt="" />
        <video autoPlay loop={true} muted playsInline={true}>
          <source src={MarvelVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={StarWar} alt="" />
        <video autoPlay loop={true} muted playsInline={true}>
          <source src={StarWarVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={National} alt="" />
        <video autoPlay loop={true} muted playsInline={true}>
          <source src={NationalVideo} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;
