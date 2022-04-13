import React, { useState } from "react";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import Basket from "../components/Basket";
import UserContext from "../context/UserContext";

const PingPongContainer = () => {
    const [items, setItems] = useState([
      { name: "Ping Pong Table", price: 200, stock: 4 },
      { name: "Gold Ping Pong Bat", price: 50, stock: 3 },
      { name: "Cardboard Ping Pong Bat", price: 3, stock: 100 },
      { name: "Ping Pong Balls", price: 1, stock: 75 },
      { name: "Ping Pong Net", price: 10, stock: 8 },
      {
        name: "Commemorative Gold-Plated 'Ping Pong Max' Framed Photograph",
        price: 2000,
        stock: 1
      }
    ]);

    const [user, setUser] = useState({ name: "Máté" });
    const [basket, setBasket] = useState([]);
    const [checkoutHide, setCheckoutHide] = useState(true);
    const [orderSubmitted, setOrderSubmitted] = useState(false);
    const [discount, setDiscount] = useState(false);

    const addToBasket = (index) => {
        const itemToAdd = items[index];
        const newBasket = [...basket];
        newBasket.push(itemToAdd);
        setBasket(newBasket);
        const copyItems = [...items];
        copyItems[index].stock --;
        setItems(copyItems);
      }

    const removeFromBasket = (index) => {
      const itemToRemove = basket[index];
      const newBasket = [...basket];
      newBasket.splice(index, 1);
      setBasket(newBasket);
      const itemsIndex = items.findIndex(item => {
        return item.name === itemToRemove.name;
      });
      const copyItems = [...items];
      copyItems[itemsIndex].stock ++;
      setItems(copyItems);
    }
      
    const totalBasket = () => {
      let total = 0;
      basket.forEach(item => total += item.price);
      return total;
    }

    const checkDiscountCode = (event) => {
        if (event.target.code.value.toLowerCase() === 'take10') {
          setDiscount(true);
        }
    }

    const showCheckout = () => setCheckoutHide(false);

    const submitOrder = () => {
      const emptyBasket = [];
      setBasket(emptyBasket);
      setOrderSubmitted(true);
      setCheckoutHide(true);
    }

    const newOrder = () => setOrderSubmitted(false);

    return (
      <div id="ping-pong">
          <Header user = {user} />
          <div id="items-basket">
              <ItemList items={items} addToBasket={addToBasket} />
              <UserContext.Provider value={{user}} >
                <Basket basket={basket} removeFromBasket={removeFromBasket} totalBasket={totalBasket} showCheckout={showCheckout} checkoutHide={checkoutHide} submitOrder={submitOrder} orderSubmitted={orderSubmitted} newOrder={newOrder} checkDiscountCode={checkDiscountCode} discount={discount}/>
              </UserContext.Provider>
          </div>
      </div>
    );
};

export default PingPongContainer;
