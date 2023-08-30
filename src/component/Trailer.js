import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import {
  useGetSimilarMoviesQuery,
  useGetTvShowSimilarlyQuery,
} from "../feature/movie/tmdbApi";

import { Link } from "react-router-dom";

const ContainerWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 70px;
  left: 0px;
  width: 100%;
  backdrop-filter: blur(5px);
  &::-webkit-scrollbar {
    display: none;
  }
`;
// const Container = styled.div`
//   background-color: rgba(15, 16, 20, 0.8);
//   border-radius: 10px;
//   width: 50%;
//   position: relative;
// `;
// const Content = styled.div`
//   height: 450px;
//   width: 800px;
//   border-radius: 10px;
//   color: white;
//   border-radius: 10px;
// `;
const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  padding: 5px;
  background-color: transparent;
  border: none;
  outline: none;
`;
// const LinkWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 30px;
//   margin-top: 20px;
//   font-weight: 700;
//   letter-spacing: 1px;
// `;
const MoreMovies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  cursor: pointer;
  p {
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: rgb(198, 198, 198);
    }
  }
`;

const CardWrapper = styled.div``;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 90px;

  img {
    border-radius: 10px;
    object-fit: cover;
    transition: 0.3s ease all;
    cursor: pointer;
    box-shadow: 12px 12px 8px 1px rgba(0, 0, 0, 0.6);

    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Trailers = ({ videoData, setIsTrailer, isTrailer, tvShowTrailer }) => {
  // console.log(tvShowTrailer);
  const MoiveId = videoData?.id;
  const TvId = tvShowTrailer?.data?.id;

  const [videoDetails, setVideoDetails] = useState([]);
  const [tvDetails, setTvDetails] = useState([]);

  useEffect(() => {
    const Details = videoData?.results?.filter(
      (video) => video?.site === "YouTube" && video?.type === "Trailer"
    );
    setVideoDetails(Details);
    // console.log("details", Details);
  }, [MoiveId]);

  useEffect(() => {
    const Details = tvShowTrailer?.data?.results?.filter(
      (video) => video?.site === "YouTube" && video?.type === "Trailer"
    );
    setTvDetails(Details);
    // console.log("details", Details);
  }, [TvId]);

  // console.log(tvDetails);
  const { data, isFetching } = useGetSimilarMoviesQuery(MoiveId);
  // console.log(data);

  const tvSimilarData = useGetTvShowSimilarlyQuery(MoiveId);

  // console.log("tv:)_-", tvSimilarData);
  // useEffect(() => {
  //   document.body.style.overflow = isTrailer ? "hidden" : "auto";
  // }, [isTrailer]);

  return (
    <ContainerWrapper
      style={{
        display: isTrailer ? "flex" : "none",
      }}
    >
      {/* <Container> */}
      {/* <Content> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          height: "100%",
          overflow: "scroll",
          width: "50%",
          backgroundColor: "rgba(15, 16, 20, 0.8)",
          marginTop: "20px",
          borderRadius: "5px",
        }}
      >
        <Close
          onClick={() => {
            setIsTrailer(false);
          }}
        >
          <CloseOutlined
            style={{
              fontSize: "18px",
              color: "white",
              cursor: "pointer",
              backgroundColor: "red",
              padding: "4px",
            }}
          />
        </Close>
        <div>
          {tvShowTrailer?.status !== "fulfilled" ? (
            <iframe
              width="765"
              height="400"
              src={`https://www.youtube-nocookie.com/embed/${videoDetails?.[0]?.key}`}
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
              style={{
                outline: "none",
                border: "none",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            ></iframe>
          ) : (
            <iframe
              width="765"
              height="400"
              src={`https://www.youtube-nocookie.com/embed/${tvDetails?.[0]?.key}`}
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
              style={{
                outline: "none",
                border: "none",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            ></iframe>
          )}
        </div>
        {/* <LinkWrapper> */}
        <MoreMovies>
          <p>More Movies</p>
          <CardWrapper>
            <Cards>
              {tvSimilarData?.status !== "fulfilled"
                ? data?.results?.map((movie) => {
                    return (
                      <Link
                        to={`/detail/${movie?.id}`}
                        onClick={() => setIsTrailer(false)}
                        key={movie?.id}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                          alt={movie?.title}
                          height="225px"
                          width="150px"
                        />
                      </Link>
                    );
                  })
                : tvSimilarData?.data?.results?.map((movie) => {
                    return (
                      <Link
                        to={`/detail/${movie?.id}`}
                        onClick={() => setIsTrailer(false)}
                        key={movie?.id}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                          alt={movie?.name}
                          height="225px"
                          width="150px"
                        />
                      </Link>
                    );
                  })}
            </Cards>
          </CardWrapper>
        </MoreMovies>

        {/* <p>Trailers & More</p> */}
        {/* </LinkWrapper> */}
        {/* </Content> */}
        {/* </Container> */}
      </div>
    </ContainerWrapper>
  );
};

export default Trailers;

// #BUG : id conflict in naruto card  MORE CLEARLY -> THE ID OF THE SERIES AND MOVIE ARE SAME DUE TO WHICH IT IS CREATING THE ENTIRE CONFLICTS :
// #TODO : MORE MOVIES NOT COMING ON SERIES SECTION ONLY , BUT ITS COMING IN SOME

// #TODO : https://developer.themoviedb.org/reference/tv-series-similar <= WEBSITE IN THIS WHEN I PUT THE ID THEN IT GIVES ME THE DATA BUT IN MY APPLICATION THE STATUS IS REJECTED IN THE SIMILAR MOVIES

// #TODO : SOME YOUTUBE VIDEOS ARE NOT WORKING IN SERIES SECTION PLEASE CHECK THAT ALSO :)

// #TODO IN SOME CASE BOTH SIMILAR SERIES AND YOUTUBE VIDEO IS NOT COMING EX- ANUPAMA
