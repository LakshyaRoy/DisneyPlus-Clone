import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import PlayIconWhite from "../images/images/play-icon-white.png";
import PlayIconBlack from "../images/images/play-icon-black.png";
import GroupIcon from "../images/images/group-icon.png";
import { useParams } from "react-router-dom";
import db from "../FireBase/Firebase";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";

const Details = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const q = query(collection(db, "movies"));

    const unsub = onSnapshot(q, (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        const movieData = doc.data();
        if (`${movieData?.id}` === `${id}`) {
          setDetailData({
            id: doc.id,
            ...movieData,
          });
          console.log(`Movie Data Fetched }`, movieData);
        } else {
          console.log("No Movie Found");
        }
      });

      setDetailData(); // Update the state with the fetched data
    });

    return () => unsub(); // Detach the snapshot listener on unmount
  }, []);

  const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
  `;

  const BackGround = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    z-index: -1;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;

      @media screen and (max-width: 768px) {
        width: initial;
      }
    }
  `;

  const ImageTitle = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    -webkit-box-pack: start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
      max-width: 600px;
      min-width: 200px;
      width: 35vw;
    }
  `;
  const ContentMeta = styled.div`
    max-width: 874px;
  `;
  const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
  `;

  const Player = styled.button`
    font-size: 15px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    color: rgb(0, 0, 0);
    border: none;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgba(249, 249, 249);
    margin: 0px 22px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8;
    text-align: center;

    img {
      width: 32px;
    }
    &:hover {
      background-color: rgb(198, 198, 198);
      transition: 0.2s ease all;
    }
    @media screen and (max-width: 768px) {
      height: 45px;
      padding: 0px 12px;
      margin: 0px 10px 0px 0px;
      font-size: 12px;

      img {
        width: 25px;
      }
    }
  `;

  const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
    border-radius: 4px;
    margin-left: 16px;
    cursor: pointer;
  `;
  const AddList = styled.div`
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(249, 249, 249);
    background: rgba(0, 0, 0, 0.6);
    font-size: 20px;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    border: 2px solid rgb(249, 249, 249);
    cursor: pointer;

    span {
      background-color: rgba(249, 249, 249);
      display: inline-block;

      &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
      }

      &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
      }
    }
    &:hover {
      background: rgb(197, 197, 197);
      transition: 0.2s ease all;
    }
  `;
  const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #fff;
    div {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: rgb(0, 0, 0);

      img {
        width: 100%;
      }
      &:hover {
        background: rgb(197, 197, 197);
        transition: 0.2s ease all;
      }
    }
  `;
  const InfoWrapper = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  `;

  const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  `;

  return (
    <Container>
      <BackGround>
        <img src={""} alt={""} />
      </BackGround>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt=""
        />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src={PlayIconBlack} alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src={PlayIconWhite} alt="" />
            <span>trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <div>
              <img src={GroupIcon} alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <InfoWrapper>sub Title</InfoWrapper>
        <Description>Lorem, ipsum.</Description>
      </ContentMeta>
    </Container>
  );
};

export default Details;
