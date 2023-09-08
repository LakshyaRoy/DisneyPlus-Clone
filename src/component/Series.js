import React, { useState } from "react";
import { styled } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import {
  useGetSearchedTvShowQuery,
  useGetTrendingTvShowQuery,
} from "../feature/movie/tmdbApi";
import { Link } from "react-router-dom";
import MovieCard from "./MoiveCard";
import SearchComponentSkeleton from "./skeletons/searchComponentSkeleton";
const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 80px;
  margin-top: 20px;
  padding: 0 calc(3.5vw + 5px);
`;

const SearchBar = styled.div`
  background-color: #252833;
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 36px;
  border-radius: 5px;

  input {
    background-color: #252833;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 20px;
    margin: 0px 10px;
    padding: 0 10px;
    &::placeholder {
      color: grey;
    }
  }
`;
const Icon = styled.div`
  cursor: pointer;
  transform: scale(1.4);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.5);
  }
`;
const Card = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 25px;
  padding: 30px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media screen and (max-width: 625px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 435px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const CardWrapper = styled.div`
  position: relative;
  cursor: pointer;
  img {
    border-radius: 10px;
    object-fit: cover;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    &:hover {
      border-color: rgba(249, 249, 249, 0.8);
      transform: scale(1.05);
      box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 /73%) 0px 16px 10px -10px;
    }
  }
  /* &:hover {
    outline: 2px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transform: scale(1.05);
  } */
`;
const Series = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data, isFetching } = useGetSearchedTvShowQuery(searchValue);

  //   console.log(data);
  const trending = useGetTrendingTvShowQuery();
  // console.log(trending?.data?.results);
  //   console.log(trending);
  return (
    <Container>
      <SearchBar>
        <Icon>
          <SearchOutlined />
        </Icon>
        <input
          type="text"
          autoComplete="off"
          placeholder="Tv Shows & More"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </SearchBar>
      {!isFetching || !trending ? (
        <Card>
          {!searchValue.length
            ? trending?.data?.results?.map((movies) => {
                return (
                  <CardWrapper key={movies?.id} title={movies?.name}>
                    <Link to={`/detail/${movies?.id}/tv`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movies?.poster_path}`}
                        alt={movies?.name}
                        height="250px"
                        width="100%"
                      />
                    </Link>
                  </CardWrapper>
                );
              })
            : data?.results?.map((movies) => {
                return <MovieCard movies={movies} type={"tv"} />;
              })}
        </Card>
      ) : (
        <SearchComponentSkeleton />
      )}
    </Container>
  );
};

export default Series;
