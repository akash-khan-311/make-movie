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
        <div>
          <ol className="list-decimal  list-inside ">
            {selectedActors.map((actor) => (
              <div className="">
                <li className="py-3 text-xl flex justify-between items-center my-4 px-3 rounded-lg cart-item">
                  {actor.name}
                  <span>
                    <div className="">
                      <IconButton
                        className=""
                        onClick={() => handleRemoveFromCart(actor)}
                      >
                        X
                      </IconButton>
                    </div>
                  </span>
                </li>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Cart;
