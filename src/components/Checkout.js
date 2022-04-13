import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const Checkout = ({showCheckout, checkoutHide, submitOrder, basket, orderSubmitted, newOrder, total, checkDiscountCode, discount}) => {

    const {user} = useContext(UserContext);
    
    const handleCheckoutClick = (event) => {
        event.preventDefault();
        checkDiscountCode(event);
        showCheckout();
    }

    const handlePaymentFormSubmit = (event) => {
        event.preventDefault();
        submitOrder();
    }

    const handleNewOrderClick = () => newOrder();

    return (
        <div id="checkout">
            { basket.length > 0 ?
            <>
                <form id='discount-code-form' onSubmit={handleCheckoutClick}>
                    <label id='code' htmlFor='discount-code'>Discount code? </label>
                    <input name='code' type='text' defaultValue='' placeholder='Code'></input>
                    <button type='submit'>Go to checkout</button>
                </form>
            </>
            : null}
            
            { !checkoutHide ?
            <form id='payment-form' onSubmit={handlePaymentFormSubmit}>
                <label id='card-holder' htmlFor='card-holder'>Cardholder's Name: </label>
                <input name='card-holder' type='text' placeholder='Name'/><br/>
                <label id='card-number' htmlFor='card-number'>Credit Card Number: </label>
                <input name='card-number' type='number' placeholder='0000 0000 0000 0000'/>
                { discount ?
                <>
                    <p>Discount applied</p>
                    <p>Total to pay: £{(total * 0.9).toFixed(2)}</p>
                </> :
                <p>Total to pay: £{total.toFixed(2)}</p> }
                <button type='submit'>Submit Order</button>
            </form>
            : null}

            { orderSubmitted ?
            <>
                <p>Thank you for your order, {user.name}!</p>
                <button onClick={handleNewOrderClick}>Start new order</button>
            </>
            : null}
        </div>
    );
}

export default Checkout;