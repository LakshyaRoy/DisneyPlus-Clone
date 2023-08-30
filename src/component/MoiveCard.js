import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Card = styled.div`
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
  }

  &:hover {
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const MovieCard = ({ movies }) => {
  // console.log(movies.movies);
  return (
    <Card key={movies.id}>
      <Link
        to={`/detail/${movies?.id}`}
        style={{
          height: "100%",
        }}
      >
        {movies.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies?.poster_path}`}
            alt={movies?.title}
            height="250px"
            width="100%"
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "50px",
              height: "100%",
              width: "100%",
              textAlign: "center",
              color: "white",
            }}
          >
            <p>{movies.title}</p>
            <p>No image</p>
          </div>
        )}
      </Link>
    </Card>
  );
};

export default MovieCard;
