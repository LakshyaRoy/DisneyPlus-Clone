import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { styled } from "styled-components";

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

const SkeletonCards = () => {
  // Create an array with 15 elements to represent the 15 cards
  const skeletonCards = new Array(15).fill(null);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Card>
        {skeletonCards.map((_, index) => (
          <CardWrapper key={index}>
            <Skeleton height={300} width={200} />
          </CardWrapper>
        ))}
      </Card>
    </SkeletonTheme>
  );
};

export default SkeletonCards;
