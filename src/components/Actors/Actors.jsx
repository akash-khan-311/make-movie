import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Actors = () => {
  const [actors, setActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(200000);
  const [remainingCart, setRemainingCart] = useState([]);
  const handleAddActors = (actor) => {
    const isExist = selectedActors.find((newActor) => newActor.id === actor.id);
    let cost = actor.salary;
    if (isExist) {
      Swal.fire({
        title: "Already Added!",
        text: "Add Other Actor",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }
    const newActors = [...selectedActors, actor];
    selectedActors.forEach((actor) => (cost += actor.salary));

    if (cost > remaining) {
      Swal.fire({
        title: "Oops! You have Sufficient Budget",
        text: "Go from here and Earn Money",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    } else {
      setSelectedActors(newActors);
      setTotalCost(cost);
      const newReamining = 200000 - cost;
      setRemaining(newReamining);
    }
  };

  const handleRemoveFromCart = (actor) => {
    const newActors = selectedActors.filter(
      (newActors) => newActors.id !== actor.id
    );
    setSelectedActors(newActors);
  };

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 my-10">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 text-white">
        {actors.map((actor) => (
          <Card
            handleAddActors={handleAddActors}
            key={actor.id}
            actor={actor}
          />
        ))}
      </div>
      <div className="lg:w-[400px] text-white cart-bg py-3 rounded-xl">
        <Cart
          handleRemoveFromCart={handleRemoveFromCart}
          totalCost={totalCost}
          remaining={remaining}
          selectedActors={selectedActors}
        />
      </div>
    </div>
  );
};

export default Actors;
