import React from 'react';

const BasketItems = ({name, price}) => {

    return(
        <div className="basket-item">
            <p>{name}</p>
            <p>£{price}</p>
        </div>
    )
}


export default BasketItems;