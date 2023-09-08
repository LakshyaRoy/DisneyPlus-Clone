import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const RecommendsSkeleton = () => {
  // Create an array with 8 elements to represent the grid of movie cards
  const skeletonCards = new Array(4).fill(null);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      {skeletonCards.map((_, id) => (
        <Skeleton
          key={id}
          height={200}
          width={300}
          style={{
            marginRight: "10px",
            marginTop: "10px",
          }}
        />
      ))}
    </SkeletonTheme>
  );
};

export default RecommendsSkeleton;
