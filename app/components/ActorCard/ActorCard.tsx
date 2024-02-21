import React from "react";
import Image from "next/image";
import imageAsset from "/public/images/RexDonovan.png";
import ActorAttributes from "../ActorAttributes/ActorAttributes";

export interface ActorAtributes {
  actingRating: number;
  storyRating: number;
  entertainmentRating: number;
  originalityRating: number;
}

export interface ActorCardProps {
  id: string;
  name: string;
  cost: number;
  actorAttributes: ActorAtributes;
}

const ActorCard = ({ id, name, cost, actorAttributes }: ActorCardProps) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-6 rounded w-96 shadow-xl border border-black bg-secondary">
        <h1>Actor: {name}</h1>
        <section className="hero container max-w-screen-lg mb-4 mx-auto flex justify-center">
          <Image
            height={200}
            width={200}
            className="rounded"
            src={imageAsset}
            alt="Actor Image"
          />
        </section>
        <div className="flex flex-col justify-center items-center">
          <ActorAttributes attributes={actorAttributes} />
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="">
            <button className="btn h-14 w-14 rounded-full bg-primary flex items-center justify-center">
              ${cost}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActorCard;
