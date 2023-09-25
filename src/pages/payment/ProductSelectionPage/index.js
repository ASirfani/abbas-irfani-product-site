import React from 'react';
import './index.css'
import Wishlist from '../../../component/Cart/WIshListCart';


const ProductSelectionPage = (props) => {
    const selectedProducts = props.favoriteData;
    const addToCards = props.addToCartHandler;
    const cards  = props.cardData;
   console.log(addToCards)
    return (
            <div className='about-us'>
                <h1 className='about titlePage'>Wishlist</h1>
                <Wishlist selectedProducts={selectedProducts} cards = {cards} addToCards={addToCards}/>
            </div>


    );
};

export default ProductSelectionPage;
