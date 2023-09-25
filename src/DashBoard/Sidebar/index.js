/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './index.css'
import logoside from '../../asset/photos/logo.jpg'
import { AiOutlineDashboard } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { SlBasketLoaded } from 'react-icons/sl'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'

const Sidebar = (props) => {
  const sideVasiblity = props.sideVasiblityData;

  return (
    <div className='side'>
      <div className='side-logo'>
        
        <img src={logoside} />
      </div>

      {/* Sidebar content */}
      {sideVasiblity ? <span className='oversview'> Oversview </span> : ''}
      {/* dashboard */}
      {!sideVasiblity ?
        (<div className='visibiiltyside'>
          <AiOutlineDashboard size={25} />
          <span >Dashboard</span>
        </div>)
        : (
          <div className='rowVisibilityside'>
            <AiOutlineDashboard size={30} />
            <span >Dashboard</span>
          </div>
        )}
      {/* products */}
      {!sideVasiblity ?
        (<div className='visibiiltyside'>
          <GiHanger size={25} />
          <span >Products</span>
        </div>)
        : (
          <div className='rowVisibilityside'>
            <GiHanger size={30} />
            <span >Products</span>
          </div>
        )}
      {/* Orders */}
      {!sideVasiblity ?
        (<div className='visibiiltyside'>
          <SlBasketLoaded size={25} />
          <span >Orders</span>
        </div>)
        : (
          <div className='rowVisibilityside'>
            <SlBasketLoaded size={30} />
            <span >Orders</span>
          </div>
        )}
      {/* reports */}
      {!sideVasiblity ?
        (<div className='visibiiltyside'>
          <MdOutlineProductionQuantityLimits size={25} />
          <span >Report</span>
        </div>)
        : (
          <div className='rowVisibilityside'>
            <MdOutlineProductionQuantityLimits size={30} />
            <span >Report</span>
          </div>

        )}</div>

  )
}

export default Sidebar