import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import {
  useGetPopularMoviesQuery,
  useGetSearchQuery,
} from "../feature/movie/tmdbApi";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 80px;
  margin-top: 20px;
  padding: 0 calc(3.5vw + 5px);
  /* @media screen and (max-width: ) {
        min-height: calc(100vh - 250px);
    } */
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
const CardWrapper = styled.div`
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  border-radius: 5px;
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

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data } = useGetPopularMoviesQuery();
  const searchData = useGetSearchQuery(searchValue);
  // console.log(data);
  // console.log(searchData);
  return (
    <Container>
      <SearchBar>
        <Icon>
          <SearchOutlined />
        </Icon>
        <input
          value={searchValue}
          type="text"
          autoComplete="off"
          placeholder="Movies, shows and more"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </SearchBar>
      {/* {isFetching && "Loading..."} */}
      <Card>
        {!searchValue.length
          ? data?.results?.map((movies) => {
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
          : searchData?.data?.results?.map((movies) => {
              return (
                <CardWrapper key={movies.id}>
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
                </CardWrapper>
              );
            })}
      </Card>
    </Container>
  );
};

export default Search;
