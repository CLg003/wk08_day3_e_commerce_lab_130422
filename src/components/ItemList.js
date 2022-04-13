import React from "react";
import ItemDetail from "./ItemDetail";

const ItemList = ({items, addToBasket}) => {

  const itemNodes = items.map((item, index) => {
    return <ItemDetail key={index} index={index} name={item.name} price={item.price} stock={item.stock} addToBasket={addToBasket} />
  });
  
  return (
    <div id="item-list">
      <h2>Stock Items</h2>
      {itemNodes}
    </div>
  );
};

export default ItemList;
