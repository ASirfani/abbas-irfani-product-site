/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom';
const Cart = ({ cartItems }) => {
	const [quantities, setQuantities] = useState(cartItems.map(() => 1));
	const [totalPrice, setTotalPrice] = useState(0);
	const [selectedValue, setSelectedValue] = useState(1.99);

	const handleRadioChange = (event) => {
		setSelectedValue(parseFloat(event.target.value));
	};

	useEffect(() => {
		// Calculate the initial total price
		const initialTotalPrice = cartItems.reduce((total, item, i) => total + item.price * quantities[i], 0);
		setTotalPrice(initialTotalPrice);
	}, []); // Empty dependency array ensures this effect runs only once

	useEffect(() => {
		// Calculate the initial total price
		const initialTotalPrice = cartItems.reduce((total, item, i) => total + item.price * quantities[i], 0);
		setTotalPrice(initialTotalPrice + selectedValue);
	}, [selectedValue]);

	const handleQuantityChange = (index, newQuantity) => {
		const newQuantities = [...quantities];
		newQuantities[index] = parseInt(newQuantity);
		setQuantities(newQuantities);

		// Calculate the new total price
		const newTotalPrice = cartItems.reduce((total, item, i) => total + item.price * newQuantities[i], 0);
		setTotalPrice(newTotalPrice);
	};




	return (
		<>
			{cartItems.length > 0 ? (
				<>
					<div className="col-12">
						<div className="cart-table clearfix">
							<table className="table table-responsive">
								<thead>
									<tr>
										<th>Product</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{cartItems.map((item, index) => (
										<tr key={index}>
											<td className="cart_product_img d-flex align-items-center">
												<a className='imgs' href="#"><img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" className="mCS_img_loaded" />
												</a>
												<span className='txtCart'>{item.name}</span>
											</td>
											<td className="price"><span className='txtCart'>{item.price}</span></td>
											<td className="qty">
												<div className="quantity">
													<input
														type="number"
														className="qty-text"
														id="qty"
														step="1"
														min="1"
														max="99"
														name="quantity"
														value={quantities[index]} // Set the input value based on state
														onChange={(e) => handleQuantityChange(index, e.target.value)}
													/>
												</div>
											</td>
											<td className="total_price">
												<span className="txtCart">${(item.price * quantities[index]).toFixed(2)}</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					<div className='bottomtablecart'>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="shipping-method-area mt-70">
								<div className="cart-page-heading">
									<h5>Shipping method</h5>
									<p>Select the one you want</p>
								</div>
								<div className="custom-control custom-radio mb-30">
									<input type="radio" id="age1" name="age" value="4.99"
										onChange={handleRadioChange} />  Next day delivery $4.99
									<br />
									<input type="radio" id="age2" name="age" value="1.99"
										onChange={handleRadioChange} />  Standard delivery $1.99
									<br />
									<input type="radio" id="age3" name="age" value="0" disabled
										onChange={handleRadioChange} />  $80.00 Buy more $0.00
									<br />

								</div>
							</div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="cart-total-area mt-70">
								<div className="cart-page-heading">
									<h5>Cart total</h5>
									<p>Final info</p>
								</div>
								<ul className="cart-total-chart">
									<li><span className='txtCart'>Subtotal</span> <span className='txtCart'> ${(cartItems.reduce((total, item, index) => total + item.price * quantities[index], 0)).toFixed(2)}</span></li>
									<li><span className='txtCart'>Shipping</span> <span className='txtCart'>{selectedValue}</span></li>
									<li><span className='txtCart'><strong>Total</strong></span> <span className='txtCart'><strong>${totalPrice.toFixed(2)}</strong></span></li>
								</ul>
								<NavLink className="btn karl-checkout-btn" to={"/checkout-page"}>Proceed to checkout</NavLink>
							</div>
						</div>
					</div>

				</>
			) : (<p>Your Cart is empty.</p>)}
		</>
	)
}

export default Cart;