"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ActorCardProps } from "../../components/ActorCard/ActorCard";

const AddActorPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ActorCardProps>();
  const onSubmit: SubmitHandler<ActorCardProps> = (data) => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it

  //returns a form with all inputs for the ActorCardProps including nested actorAttributes
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Actor Name</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs input-accent"
          defaultValue="test"
          {...(register("name"), { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Actor Cost</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs input-accent"
          defaultValue="test"
          {...(register("cost"), { required: true })}
        />
        {errors.cost && <span>This field is required</span>}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Acting Rating</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs input-accent"
          defaultValue="test"
          {...(register("actorAttributes.actingRating"), { required: true })}
        />
        {errors.actorAttributes?.actingRating && (
          <span>This field is required</span>
        )}
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Story Rating</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs input-accent"
          defaultValue="test"
          {...(register("actorAttributes.storyRating"), { required: true })}
        />
        {errors.actorAttributes?.storyRating && (
          <span>This field is required</span>
        )}
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Entertainment Rating</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs input-accent"
          defaultValue="test"
          {...(register("actorAttributes.entertainmentRating"),
          {
            required: true,
          })}
        />
        {errors.actorAttributes?.entertainmentRating && (
          <span>This field is required</span>
        )}
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Originality Rating</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs input-accent"
          defaultValue="test"
          {...(register("actorAttributes.originalityRating"),
          {
            required: true,
          })}
        />
        {errors.actorAttributes?.originalityRating && (
          <span>This field is required</span>
        )}
      </label>

      <input type="submit" />
    </form>
  );
};

export default AddActorPage;
