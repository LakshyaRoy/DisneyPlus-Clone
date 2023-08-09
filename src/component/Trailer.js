import React, { useEffect } from "react";
import { styled } from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { useGetSimilarMoviesQuery } from "../feature/movie/tmdbApi";
import { Link } from "react-router-dom";

const ContainerWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 80px;
  left: 0px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Container = styled.div`
  min-width: 900px;
  max-width: 100%;
  background-color: rgba(15, 16, 20, 0.8);
  border-radius: 10px;
  width: 50%;
  position: relative;
`;
const Content = styled.div`
  height: 450px;
  width: 800px;
  padding: 40px;
  border-radius: 10px;
  color: white;
  border-radius: 10px;
`;
const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  padding: 5px;
  background-color: transparent;
  border: none;
  outline: none;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 20px;
  font-weight: 700;
  letter-spacing: 1px;
`;
const MoreMovies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  p {
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: rgb(198, 198, 198);
    }
  }
`;

const CardWrapper = styled.div``;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  img {
    border-radius: 10px;
    object-fit: cover;
    transition: 0.3s ease all;
    cursor: pointer;
    box-shadow: 12px 12px 8px 1px rgba(0, 0, 0, 0.6);

    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Trailers = ({ videoData, setIsTrailer, isTrailer }) => {
  const MoiveId = videoData?.id;
  const videoDetails = videoData?.results?.filter(
    (video) => video?.site === "YouTube" && video?.type === "Trailer"
  );

  const { data, isFetching } = useGetSimilarMoviesQuery(MoiveId);
  console.log(data);

  // useEffect(() => {
  //   document.body.style.overflow = isTrailer ? "hidden" : "auto";
  // }, [isTrailer]);

  return (
    <ContainerWrapper>
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
            style={{
              outline: "none",
              border: "none",
              width: "100%",
              height: "100%",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          ></iframe>
          <LinkWrapper>
            <MoreMovies>
              <p>More Movies</p>
              <CardWrapper>
                <Cards>
                  {data?.results?.map((movie) => {
                    return (
                      <Link to={`/detail/${movie?.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                          alt={movie?.title}
                          height="225px"
                          width="150px"
                        />
                      </Link>
                    );
                  })}
                </Cards>
              </CardWrapper>
            </MoreMovies>

            {/* <p>Trailers & More</p> */}
          </LinkWrapper>
        </Content>
      </Container>
    </ContainerWrapper>
  );
};

export default Trailers;
