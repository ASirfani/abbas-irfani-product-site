/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCurrencyPound } from "react-icons/bs";

import { AiOutlinePlus, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import './index.css'
import { useNavigate } from 'react-router-dom';

const TemplateCard = (props) => {
    const [message, setMessage] = useState('');

    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, 1000);
    };

    const currency = <BsCurrencyPound />;
    const isItemInCart = props.cardData.some(item => item.name === props.name);
    const isItemInFavorites = props.favoriteData.some(item => item.name === props.name);

    const handleHeartClick = () => {
        if (!isItemInFavorites) {
            props.addToFavoritesHandler({ name: props.name, price: props.price });
            showMessage("Add to your favorite list")
        } else {
            showMessage("Already added to you favorite list")
        }
    };
    const navigate = useNavigate()
    const openProduct = () => {
     navigate(`/product-details/${props.name}/${props.price}`)
    }
    
    const handlePlusClick = () => {
        console.log('Plus icon clicked');
    };



    const handleCartClick = () => {
        if (!isItemInCart) {
            props.addToCartHandler({ name: props.name, price: props.price })
            showMessage("Add to your cart list")
        } else {
            showMessage("Already added to you favorite list")
        }
    };
    return (
        <>
            <div className="message-container">
                {message && <div className="message">{message}</div>}
            </div>
            <div className="templateCard">
                <div className="product-wrapper mb-45 text-center">
                    <div className="product-img">
                        <div className='content-img' onClick={openProduct}>
                            <img src="https://i.imgur.com/tL7ZE46.jpg" alt="" />
                        </div>
                        <span className="txtredColor"> {currency} {props.price} </span>
                        <div className="product-action">
                            <div className="product-action-style">
                                <span onClick={handlePlusClick}>
                                    <AiOutlinePlus className='spinicon' />
                                </span>
                                <span onClick={handleHeartClick} >
                                    <AiOutlineHeart className='spinicon' />
                                </span>
                                <span onClick={handleCartClick}>
                                    <AiOutlineShoppingCart className='spinicon' />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='products-details-price'>
                        <p>{props.name}</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default TemplateCard