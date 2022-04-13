import React from "react";

const ItemDetail = ({index, name, price, stock, addToBasket}) => {

    const handleClick = () => {
        addToBasket(index);
    }

    return(
        <li className="item-detail">
            <p>Name: {name}</p>
            <p>Price: £{price}</p>
            <p>Stock: {stock}</p>
            <button onClick={handleClick}>Add to basket</button>
            <br/>
        </li>

    );


};

export default ItemDetail;
