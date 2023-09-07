import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { styled } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
  cursor: pointer;

  &:hover {
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
  }

  div {
    border: 3px solid rgba(249, 249, 249, 0.1);
    &:hover {
      border: 3px solid rgba(249, 249, 249, 0.8);
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const recommendsSkeleton = () => {
  return (
    <>
      <div>
        <SkeletonTheme baseColor="#101010" highlightColor="#222" count={4}>
          <h4>Recommended For You</h4>
          <Content>
            <div>
              <Skeleton height={200} />
            </div>
            <div>
              <Skeleton height={200} />
            </div>
            <div>
              <Skeleton height={200} />
            </div>
            <div>
              <Skeleton height={200} />
            </div>
          </Content>
        </SkeletonTheme>
      </div>
    </>
  );
};

export default recommendsSkeleton;
