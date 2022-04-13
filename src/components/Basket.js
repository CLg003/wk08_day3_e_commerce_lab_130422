import React from "react";
import BasketItems from "./BasketItems";

const Basket = ({basket}) => {

  const basketItemNodes = basket.map((item, index) => {
      return (
        <BasketItems key={index} index={index} name={item.name} price={item.price} />
      );
  })

  return (
    <div id="basket">
      <h2>Your shopping basket</h2>
      {basketItemNodes}
    </div>
  );
};

export default Basket;
