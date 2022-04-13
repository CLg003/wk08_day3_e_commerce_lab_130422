import React from 'react';

const BasketItems = ({index, name, price, removeFromBasket}) => {

    const handleClick = () => {
        removeFromBasket(index);
    }

    return(
        <tr className='basket-item'>
            <td>{name}</td>
            <td className='price'>£{price.toFixed(2)}</td>
            <td><button className='remove-item' onClick={handleClick}>&#10006;</button></td>
        </tr>
    )
}


export default BasketItems;