import React, { useState } from "react";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import Basket from "../components/Basket";

const PingPongContainer = () => {
  const [items, setItems] = useState(
    { name: "Ping Pong Table", price: 200, stock: 4 },
    { name: "Gold Ping Pong Bat", price: 50, stock: 3 },
    { name: "Cardboard Ping Pong Bat", price: 3, stock: 100 },
    { name: "Ping Pong Balls", price: 1, stock: 75 },
    { name: "Ping Pong Net", price: 10, stock: 8 },
    {
      name: "Commemorative Gold-Plated 'Ping Pong Max' Framed Photograph",
      price: 2000,
      stock: 1,
    }
  );

  const [user, setUser] = useState({ name: "Mate" });

  return (
    <div id="ping-pong">
      <Header />
      <div id="items-basket">
        <ItemList />
        <Basket />
      </div>
    </div>
  );
};

export default PingPongContainer;
