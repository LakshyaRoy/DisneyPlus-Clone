import React, { useState } from "react";
import { styled } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import {
  useGetSearchedTvShowQuery,
  useGetTrendingTvShowQuery,
} from "../feature/movie/tmdbApi";
import { Link } from "react-router-dom";
import MovieCard from "./MoiveCard";
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
`;
const CardWrapper = styled.div``;
const Series = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data, fetching } = useGetSearchedTvShowQuery(searchValue);
  //   console.log(data);
  const trending = useGetTrendingTvShowQuery();
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
      <Card>
        {!searchValue.length
          ? trending?.data?.results?.map((movies) => {
              return (
                <CardWrapper key={movies?.id}>
                  <Link to={`/detail/${movies?.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movies?.poster_path}`}
                      alt={movies?.title}
                      height="250px"
                      width="100%"
                    />
                  </Link>
                </CardWrapper>
              );
            })
          : data?.results?.map((movies) => {
              return <MovieCard movies={movies} />;
            })}
      </Card>
    </Container>
  );
};

export default Series;
