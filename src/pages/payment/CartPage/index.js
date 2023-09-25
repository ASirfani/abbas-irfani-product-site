/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './index.css'
import Cart from '../../../component/Cart/Carts';


const CartPage = (props) => {

    const cartItems = props.cardData;
    

    return (<>
        <div className='about-us'>
                <h1 className='about titlePage'>Cart</h1>
                <Cart cartItems={cartItems}/>
            </div>

    </>
    );
};

export default CartPage;
