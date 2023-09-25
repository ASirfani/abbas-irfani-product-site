import React from 'react'
import './index.css'
import { NavLink, Outlet } from 'react-router-dom';
const Menu = () => {
  return (
    <>
      <div className='container'>
        <div className='subsMenu'>
          <div><NavLink to="/home" activeClassName="active" ><span>Home</span></NavLink></div>
          <div><NavLink to="/products"><span>Products</span></NavLink></div>
          <div><NavLink to="/new-arrivals"><span>New Arrivals</span></NavLink></div>
          <div><NavLink to="/offers"><span>Offer</span></NavLink></div>
          <div><NavLink to="/top-selling"><span>Top Selling</span></NavLink></div>
        </div>
      </div>
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default Menu;
