/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { CiLocationOn } from 'react-icons/ci'
import { BiDollar } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillTelephoneForwardFill, BsPersonCircle } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
// AiOutlineMenuFold


const TopMenu = () => {
  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };
  const [toggle, setToggle] = useToggle();


  const sizeIcon = 16;
  return (
    <div className='lightBlackColor'>
      <Container className='topmenu' >
        <Row className='row'>
          <Col className='cols'>
            <NavLink className='col' to="/contact-us"><BsFillTelephoneFill className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> +0123456789</span></NavLink>
            <NavLink className='col' to="/contact-us"><BiMailSend className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> Example@gmail.com</span></NavLink>
            <NavLink className='col' target='_blank' to="https://www.google.com/maps/place/Fresh+Inn+Bakers+%26+Sweets/@33.5878486,73.0973648,21z/data=!4m6!3m5!1s0x38dfecafd00c6945:0xed531c2905d9ef6a!8m2!3d33.5879263!4d73.097348!16s%2Fg%2F12mkw96dp?entry=ttu"><CiLocationOn className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> 1734 Stonecoal Road</span></NavLink>
          </Col>

          <Col className='cols rtf'>
            <NavLink className='col' to="/dashboard"><BsPerson className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> My Acount</span></NavLink>
            <NavLink className='col' to="/home"><BiDollar className='txtredColor icons' size={sizeIcon} /><span className='txtwhite spanTopMenu'>USD</span></NavLink>
          </Col>
        </Row>
      </Container >

      <div className='mobile-size container'>
        <div className='menuIcon' onClick={setToggle}>
          {/* <AiOutlineMenuFold size={30}   className='closeMenu'/> */}
          <AiOutlineMenuUnfold size={30} className='openMenu' />
        </div>
        <div className='phone-number'>
          <BsFillTelephoneForwardFill size={20} /> +0123456789
        </div>
        <div className='acount'>
        <NavLink className='mobileAccountIcon'  to="/dashboard"><BsPersonCircle size={30} /></NavLink>
        </div>
      </div>
      <div>


        {toggle && (
          <div className='container'>
            <div className='mobileMenu'>
              <div><NavLink to="/home" activeClassName="active" ><span>Home</span></NavLink></div>
              <div><NavLink to="/products"><span>Products</span></NavLink></div>
              <div><NavLink to="/new-arrivals"><span>New Arrivals</span></NavLink></div>
              <div><NavLink to="/offers"><span>Offer</span></NavLink></div>
              <div><NavLink to="/top-selling"><span>Top Selling</span></NavLink></div>
              <div><NavLink to="/home"><span>Privacy Policy</span></NavLink></div>
              <div><NavLink to="/home"><span>Orders and Returns</span></NavLink></div>
              <div><NavLink to="/terms-conditions"><span>Terms & Conditions</span></NavLink></div>
              <div><NavLink to="/home"><span>Track My Order</span></NavLink></div>
              <div><NavLink to="/contact-us"><span>Contact Us</span></NavLink></div>
              <div><NavLink to="/about-us"><span>About US</span></NavLink></div>
              <div><NavLink to="/top-selling"><span>Help</span></NavLink></div>
            </div>
          </div>
        )}

      </div>

    </div >
  )
}

export default TopMenu
