import React, { useState } from 'react';
import './index.css';

const Wishlist = ({ selectedProducts, addToCards, cards }) => {

  const [message, setMessage] = useState('');

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage('');
    }, 1000);
  };

  const handleCartClick = (name, price) => {

    const isItemInCart = cards.some(item => item.name === name);

    if (!isItemInCart) {
      addToCards({ name: name, price: price })
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
      <div className="wishlist-container">
        <div className="main-heading">My wishlist</div>
        {selectedProducts.length > 0 ? (
          <div className="table-wishlist">
            <table cellPadding="0" cellSpacing="0" border="0" width="100%">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Unit Price</th>
                  <th>Stock Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {selectedProducts.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <div className="product-info">
                        <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" className="mCS_img_loaded" />

                        <div className="product-name">{product.name}</div>
                      </div>
                    </td>
                    <td className="price">{product.price}</td>
                    <td>
                      <span className="in-stock-box">In stock</span>
                    </td>
                    <td>
                      <button className="round-black-btn small-btn" onClick={() => { handleCartClick(product.name, product.price) }}>Add Cart</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </>
  );
};

export default Wishlist;
