import React, { useEffect } from "react";
import styled from "styled-components";
import Disney from "../images/images/logo.svg";
import Home from "../images/images/home-icon.svg";
import WatchList from "../images/images/watchlist-icon.svg";
import Series from "../images/images/series-icon.svg";
import Search from "../images/images/search-icon.svg";
import Originals from "../images/images/original-icon.svg";
import Movies from "../images/images/movie-icon.svg";
import { auth } from "../FireBase/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import Skeleton from "react-loading-skeleton";
import {
  setSignOutState,
  setUserLoginDetails,
} from "../feature/user/userSlice";

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
const Logo = styled.div`
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
const UserImg = styled.img`
  height: auto; /* Adjust the height to your desired value */
  width: auto;
  border-radius: 50%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.3);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 12px;
  letter-spacing: 3px;
  width: 95px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;

      transition-duration: 1s;
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const userData = useSelector((state) => state.userSlice.user);
  // console.log(userData);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      // console.log(user);
      if (user) {
        // console.log(user);
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
        localStorage.setItem("localId", user?.uid);
        // history("/home");
      }
    });
  }, [userData?.name]);
  const [messageApi, contextHolder] = message.useMessage();
  const handleLogin = async () => {
    if (!userData?.name) {
      try {
        const loginData = await signInWithPopup(auth, new GoogleAuthProvider());
        // console.log(loginData);
        dispatch(
          setUserLoginDetails({
            name: loginData.displayName,
            email: loginData.email,
            photoUrl: loginData.photoURL,
          })
        );
        messageApi.open({
          type: "success",
          content: "Login Successfully",
          duration: 2,
          maxCount: 3,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        dispatch(setSignOutState());
        auth.signOut();
        history("/");
        localStorage.removeItem("localId");
        messageApi.open({
          type: "success",
          content: "Logout Successfully",
          duration: 2,
          maxCount: 3,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const setUser = (user) => {
  //   dispatch(
  //     setUserLoginDetails({
  //       name: user.displayName,
  //       email: user.email,
  //       photoUrl: user.photoURL,
  //     })
  //   );
  // };
  // console.log(userPhoto);
  // console.log(userData);

  return (
    <Nav>
      {contextHolder}
      {!userData?.name ? (
        <Link to="/">
          <Logo>
            <img src={Disney} alt="Disney" />
          </Logo>
        </Link>
      ) : (
        <Link to="/home">
          <Logo>
            <img src={Disney} alt="Disney" />
          </Logo>
        </Link>
      )}

      {!userData?.name ? (
        <Login onClick={handleLogin}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src={Home} alt="Home" />
              <span>Home</span>
            </Link>
            <Link to="/search">
              <img src={Search} alt="Search" />
              <span>Search</span>
            </Link>
            <Link to="/watchlist">
              <img src={WatchList} alt="WatchList" />
              <span>WatchList</span>
            </Link>
            {/* <Link to="/originals">
              <img src={Originals} alt="Originals" />
              <span>Originals</span>
            </Link> */}
            {/* <Link to="/movies">
              <img src={Movies} alt="Movies" />
              <span>Movies</span>
            </Link> */}
            <Link to="/series">
              <img src={Series} alt="Series" />
              <span>Series</span>
            </Link>
          </NavMenu>
          <SignOut>
            {!userData ? (
              <Skeleton circle={true} height={48} width={48} />
            ) : (
              <UserImg src={`${userData?.photoUrl}`} alt={userData?.name} />
            )}
            <DropDown>
              {!userData ? (
                <Skeleton width={70} height={20} />
              ) : (
                <span onClick={handleLogin}>Sign Out</span>
              )}
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;
