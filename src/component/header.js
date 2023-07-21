import React from "react";
import styled from "styled-components";
import Disney from "../images/images/logo.svg";
import Home from "../images/images/home-icon.svg";
import WatchList from "../images/images/watchlist-icon.svg";
import Series from "../images/images/series-icon.svg";
import Search from "../images/images/search-icon.svg";
import Originals from "../images/images/original-icon.svg";
import Movies from "../images/images/movie-icon.svg";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2 ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    cursor: pointer;
    border-color: transparent;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src={Disney} alt="Disney" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src={Home} alt="Home" />
          <span>Home</span>
        </a>
        <a href="/Search">
          <img src={Search} alt="Search" />
          <span>Search</span>
        </a>
        <a href="/WatchList">
          <img src={WatchList} alt="WatchList" />
          <span>WatchList</span>
        </a>
        <a href="/Originals">
          <img src={Originals} alt="Originals" />
          <span>Originals</span>
        </a>
        <a href="/Movies">
          <img src={Movies} alt="Movies" />
          <span>Movies</span>
        </a>
        <a href="/Series">
          <img src={Series} alt="Series" />
          <span>Series</span>
        </a>
      </NavMenu>
      <Login>Login</Login>
    </Nav>
  );
};

export default Header;
