import React from 'react';

const BasketItems = ({index, name, price}) => {

    const handleClick = () => {
        removeFromBasket(index);
    }

    return(
        <li className='basket-item'>
            <p>{name}</p>
            <p>£{price} <button className='remove-item' onClick={handleClick}>&#10006;</button></p>
        </li>
    )
}


export default BasketItems;