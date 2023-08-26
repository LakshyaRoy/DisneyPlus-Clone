import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db, { auth } from "../FireBase/Firebase";
import MovieCard from "./MoiveCard";
import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 80px;
  margin-top: 20px;
  padding: 0 calc(3.5vw + 5px);
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

const WatchList = () => {
  //   console.log(q);

  const [watchList, setWatchList] = useState([]);

  const localUserId = localStorage.getItem("localId");
  const getAllWishlist = () => {
    const q = query(
      collection(db, "wishlist"),
      where("uid", "==", localUserId)
    );
    onSnapshot(q, (QuerySnapshot) => {
      setWatchList(QuerySnapshot.docs);
    });
  };

  // console.log(watchList);

  useEffect(() => {
    getAllWishlist();
  }, []);

  // const wishListArray = watchList.map((movies) => movies?.data());
  // const matchUid = wishListArray?.find(
  //   (movies) => movies?.uid === auth?.currentUser?.uid
  // );
  console.log("auth check", auth?.currentUser?.uid);
  return (
    <Container>
      <Card>
        {watchList.map(
          (movies) => {
            // console.log(movies?.data()?.uid);
            return <MovieCard key={movies.id} movies={movies.data()} />;
          }

          // console.log(movie.data())
        )}
      </Card>
    </Container>
  );
};

export default WatchList;
