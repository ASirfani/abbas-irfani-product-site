/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './index.css'
const ProductDetails = (props) => {
    const [message, setMessage] = useState('');

    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, 1000);
    };
    const { name, price } = useParams();

    const isItemInCart = props.cardData.some(item => item.name === name);

    const handleCartClick = () => {
        if (!isItemInCart) {
            props.addToCartHandler({ name: name, price: price })
            showMessage("Add to your cart list")
        } else {
            showMessage("Already added to you favorite list")
        }
    };
    return (<><div className="message-container">
        {message && <div className="message">{message}</div>}
    </div>
        <div style={{ backgroundColor: '#fff' }}>
            {/* back link */}
            <div className="breadcumb_area">
                <div className="container">
                    <div className="col-12">
                        <a href="#" className="backToHome d-block"><i className="fa fa-angle-double-left"></i> Back to Category</a>
                    </div>
                </div>
            </div>

            {/* details */}
            <section className="single_product_details_area section_padding_0_100">
                <div className="container">
                    {/* image */}
                    <div className='productViews'>
                        <div className="single_product_thumb">
                            <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a className="gallery_img" href="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-17.jpg">
                                            <img className="d-block w-100" src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-17.jpg" alt="First slide" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* detailsProduct */}
                        <div className="col-12 col-md-6" >
                            <div className="single_product_desc">
                                <h4 className="title"><a href="#">{name}</a></h4>
                                <h4 className="price">$ {price}</h4>
                                <p className="available">Available: <span className="text-muted">In Stock</span></p>
                                <div className="widget size mb-50">
                                    <h6 className="widget-title">Size</h6>
                                    <div className="widget-desc">
                                        <ul>
                                            <li><a href="#">32</a></li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="cart clearfix mb-50 d-flex" >
                                    <div className="quantity">
                                        <span className="qty-minus"
                                        ><i className="fa fa-minus" aria-hidden="true"></i></span>
                                        <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1" />
                                        <span className="qty-plus"
                                        ><i className="fa fa-plus" aria-hidden="true"></i></span>
                                    </div>
                                    <button onClick={handleCartClick} name="addtocart" className="btn cart-submit d-block">Add to cart</button>
                                </div>

                                <div id="accordion" role="tablist">
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <h6 className="mb-0">
                                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Information</a>
                                            </h6>
                                        </div>

                                        <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                                <p>Approx length 66cm/26" (Based on a UK size 8 sample) Mixed fibres</p>
                                                <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingTwo">
                                            <h6 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Cart Details</a>
                                            </h6>
                                        </div>
                                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore, tempore provident dignissimos nemo, nulla quaerat. Quibusdam non, eos, voluptatem reprehenderit hic nam! Laboriosam, sapiente! Praesentium.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia magnam laborum eaque.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingThree">
                                            <h6 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">shipping &amp; Returns</a>
                                            </h6>
                                        </div>
                                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo sint repudiandae suscipit ab soluta delectus voluptate, vero vitae, tempore maxime rerum iste dolorem mollitia perferendis distinctio. Quibusdam laboriosam rerum distinctio. Repudiandae fugit odit, sequi id!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae qui maxime consequatur laudantium temporibus ad et. A optio inventore deleniti ipsa.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal fade" id="quickview" role="dialog" aria-labelledby="quickview" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                            <div className="quickview_body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-5">
                                            <div className="quickview_pro_img">
                                                <img src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-17.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-7">
                                            <div className="quickview_pro_des">
                                                <h4 className="title">Boutique Silk Dress</h4>
                                                <div className="top_seller_product_rating mb-15">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <h5 className="price">$120.99 <span>$130</span></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                                                <a href="#">View Full Product Details</a>
                                            </div>
                                            <form className="cart" method="post">
                                                <div className="quantity">
                                                    <span className="qty-minus"
                                                    ><i className="fa fa-minus" aria-hidden="true"></i></span>

                                                    <input type="number" className="qty-text" id="qty2" step="1" min="1" max="12" name="quantity" value="1" />

                                                    <span className="qty-plus" ><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                </div>
                                                <button type="submit" name="addtocart"
                                                    className="cart-submit">Add to cart</button>
                                                <div className="modal_pro_wishlist">
                                                    <a href="wishlist.html" target="_blank"><i className="ti-heart"></i></a>
                                                </div>
                                                <div className="modal_pro_compare">
                                                    <a href="compare.html" target="_blank"><i className="ti-stats-up"></i></a>
                                                </div>
                                            </form>

                                            <div className="share_wf mt-30">
                                                <p>Share With Friend</p>
                                                <div className="_icon">
                                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
    )
}

export default ProductDetails