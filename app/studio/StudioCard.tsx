import React from "react";
import Image from "next/image";

export interface ActorAtributes {
  actingRating: number;
  storyRating: number;
  entertainmentRating: number;
  originalityRating: number;
}

const StudioCard = ({}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-6 rounded w-96 shadow-xl border border-black bg-secondary"></div>
    </>
  );
};

export default StudioCard;
