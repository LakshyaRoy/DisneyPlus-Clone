import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { styled } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";

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
`;
const searchComponentSkeleton = ({ data }) => {
  return (
    <>
      <SkeletonTheme baseColor="#101010" highlightColor="#222" count={4}>
        <Card>
          {data?.map((movies) => {
            return (
              <CardWrapper>
                <Skeleton height={300} width={200} {...movies} />
              </CardWrapper>
            );
          })}
        </Card>
      </SkeletonTheme>
    </>
  );
};

export default searchComponentSkeleton;
