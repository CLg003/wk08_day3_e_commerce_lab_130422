import React from "react";
import BasketItems from "./BasketItems";
import Checkout from "./Checkout";

const Basket = ({basket, removeFromBasket, totalBasket, showCheckout, checkoutHide, submitOrder, orderSubmitted, newOrder, checkDiscountCode, discount}) => {

  const basketItemNodes = basket.map((item, index) => {
      return (
        <BasketItems key={index} index={index} name={item.name} price={item.price} removeFromBasket={removeFromBasket}/>
      );
  })

  const total = totalBasket();

  return (
    <div id="basket-checkout">
        <div id="basket">
        <h2>Your shopping basket</h2>
        <table>
            { basket.length === 0 ?
            <tbody>
                <tr>
                    <td>Your shopping basket is empty</td>
                </tr>
                <tr>
                    <td className="total-price">Total:</td>
                    <td className="total-price">£{total.toFixed(2)}</td>
                </tr>
            </tbody> :
            <tbody>
                {basketItemNodes}
                <tr>
                    <td className="total-price">Total:</td>
                    <td className="total-price">£{total.toFixed(2)}</td>
                </tr>
            </tbody> }
        </table>
        </div>
        <Checkout total={total} showCheckout={showCheckout} checkoutHide={checkoutHide} submitOrder={submitOrder} basket={basket} orderSubmitted={orderSubmitted} newOrder={newOrder} total={total} checkDiscountCode={checkDiscountCode} discount={discount}/>
    </div>
  );
};

export default Basket;
