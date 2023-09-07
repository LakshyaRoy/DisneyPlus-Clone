// import styled from "styled-components";

import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BackGround from "../images/images/home-background.png";
import ImageSlider from "./imageSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import DisneyPlus from "./DisneyPlus";
import Originals from "./Originals";
import Trending from "./Tranding";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../feature/movie/MoviesSlice";
import { setUserLoginDetails } from "../feature/user/userSlice";
import db from "../FireBase/Firebase";
import {
  QuerySnapshot,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import RecommendsSkeleton from "./skeletons/recommendsSkeleton";

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
  const dispatch = useDispatch();
  const [movies, setMovies] = useState({
    recommends: [],
    newDisney: [],
    originals: [],
    trending: [],
  });

  const userData = useSelector((state) => state.userSlice.user);
  useEffect(() => {
    const q = query(collection(db, "movies"));

    const unsub = onSnapshot(q, (QuerySnapshot) => {
      const updatedMovies = {
        recommends: [],
        newDisney: [],
        originals: [],
        trending: [],
      };

      QuerySnapshot.forEach((doc) => {
        const movieData = doc.data();
        switch (movieData.type) {
          case "recommend":
            updatedMovies.recommends.push(movieData);
            break;
          case "new":
            updatedMovies.newDisney.push(movieData);
            break;
          case "original":
            updatedMovies.originals.push(movieData);
            break;
          case "trending":
            updatedMovies.trending.push(movieData);
            break;
          default:
            break;
        }
      });

      setMovies(updatedMovies); // Update the state with the fetched data
    });

    return () => unsub(); // Detach the snapshot listener on unmount
  }, [userData.name]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />

      {movies.length === null ? (
        <RecommendsSkeleton />
      ) : (
        <>
          <Recommends data={movies.recommends} />
          <DisneyPlus data={movies.newDisney} />
          <Originals data={movies.originals} />
          <Trending data={movies.trending} />
        </>
      )}
    </Container>
  );
};

export default Home;
