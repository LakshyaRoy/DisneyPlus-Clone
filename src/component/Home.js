// import styled from "styled-components";

import React from "react";
import { styled } from "styled-components";
import BackGround from "../images/images/home-background.png";
import ImageSlider from "./imageSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import DisneyPlus from "./DisneyPlus";
import Originals from "./Originals";
import Trending from "./Tranding";

const Container = styled.main`
  position: relative;
  background-image: url(${BackGround}) center center / cover no-repeat fixed;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &::after {
    background: url(${BackGround}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <DisneyPlus />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;
