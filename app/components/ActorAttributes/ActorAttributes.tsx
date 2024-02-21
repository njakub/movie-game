import React from "react";
import { ActorAtributes } from "../ActorCard/ActorCard";

interface ActorAttributesProps {
  attributes: ActorAtributes;
}

const ActorAttributes = ({ attributes }: ActorAttributesProps) => {
  return (
    <table className="table mb-4 table-bordered bg-white border-yellow-300 border-2">
      <thead>
        <tr>
          <th className="p-1 text-center">Acting</th>
          <th className="p-1 text-center">Story</th>
          <th className="p-1 text-center">Entertainment</th>
          <th className="p-1 text-center">Originality</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-1 text-center">{attributes.actingRating}</td>
          <td className="p-1 text-center">{attributes.storyRating}</td>
          <td className="p-1 text-center">{attributes.entertainmentRating}</td>
          <td className="p-1 text-center">{attributes.originalityRating}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ActorAttributes;
