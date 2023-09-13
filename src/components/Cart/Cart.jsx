import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react";

const Cart = ({
  selectedActors,
  totalCost,
  remaining,
  handleRemoveFromCart,
}) => {
  return (
    <div>
      <h1 className="text-4xl text-center">Actors {selectedActors.length}</h1>
      <hr />
      <div className="space-y-5 my-5">
        <h1 className="text-4xl text-center">My Budget: ${remaining}</h1>
        <h2 className="text-3xl text-center">Total Expense : ${totalCost}</h2>
      </div>
      <div className="px-10">
        {selectedActors.map((actor) => (
          <div key={actor.id}>
            <ol className="list-decimal list-inside py-3 text-xl cart-item my-4 px-3 rounded-lg flex justify-between items-center">
              <li className="">{actor.name}</li>{" "}
              <IconButton onClick={() => handleRemoveFromCart(actor)}>
                X
              </IconButton>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
