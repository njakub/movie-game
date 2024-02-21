import React from "react";
import ActorCard from "../components/ActorCard/ActorCard";

const ActorsPage = () => {
  const actorAttributes = {
    actingRating: 5,
    storyRating: 5,
    entertainmentRating: 5,
    originalityRating: 5,
  };
  return (
    <>
      <ActorCard
        id={"1"}
        name={"Rex Sterling"}
        actorAttributes={actorAttributes}
        cost={0}
      />
    </>
  );
};

export default ActorsPage;
