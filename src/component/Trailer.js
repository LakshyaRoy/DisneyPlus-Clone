import React from "react";
import { styled } from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

const Container = styled.div`
  position: fixed;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  height: 450px;
  width: 800px;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: aqua;
  background-color: rgba(15, 16, 20, 0.6);
  color: white;
`;
const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 5px;
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    background-color: red;
  }
`;
const Trailers = ({ videoData, setIsTrailer, isTrailer }) => {
  //   console.log(videoData);
  const videoDetails = videoData?.results?.filter(
    (video) => video?.site === "YouTube" && video?.type === "Trailer"
  );
  //   console.log(videoDetails);
  return (
    <Container
      style={{
        display: isTrailer ? "flex" : "none",
      }}
    >
      <Content>
        <Close
          onClick={() => {
            setIsTrailer(false);
          }}
        >
          <CloseOutlined
            style={{
              fontSize: "18px",
              color: "white",
            }}
          />
        </Close>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${videoDetails?.[0]?.key}`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
        ></iframe>
      </Content>
    </Container>
  );
};

export default Trailers;
