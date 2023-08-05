import React from "react";
import { styled } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { useGetPopularMoviesQuery } from "../feature/movie/tmdbApi";

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

const Search = () => {
  const { data } = useGetPopularMoviesQuery();
  // console.log(data);
  return (
    <Container>
      <SearchBar>
        <Icon>
          <SearchOutlined />
        </Icon>
        <input
          type="text"
          autoComplete="off"
          placeholder="Movies, shows and more"
        />
      </SearchBar>
    </Container>
  );
};

export default Search;
