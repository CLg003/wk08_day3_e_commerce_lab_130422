import React from "react";

const ItemDetail = ({index, name, price, stock, addToBasket}) => {

    const handleClick = () => {
        addToBasket(index);
    }

    return(
        <li className="item-detail">
            <p>Name: {name}</p>
            <p>Price: £{price.toFixed(2)}</p>
            <p>Stock: {stock}</p>
            { stock > 0 ? 
            <button onClick={handleClick}>Add to basket</button> : 
            <button>Out of stock</button> }
            
            <br/>
        </li>

    );


};

export default ItemDetail;
