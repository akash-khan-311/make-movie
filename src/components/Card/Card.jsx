import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Card = ({ actor, handleAddActors }) => {
  const { name, salary, role, image } = actor;

  return (
    <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative rounded-lg    overflow-hidden bg-white bg-clip-border text-gray-700 shadow-lg">
        <img src={image} className="w-full" alt="profile-picture" />
      </div>
      <div className="pt-6 text-center">
        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h4>
        <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          {role}
        </p>
      </div>
      <div className="flex justify-center mx-auto flex-col gap-y-2 my-4">
        <p>Salary: ${salary}</p>

        <Button
          onClick={() => handleAddActors(actor)}
          color="blue"
          variant="gradient"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
