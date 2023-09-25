import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import './index.css'
import {useNavigate} from 'react-router-dom'

const MainMenuContent = () => {
  const navigate = useNavigate();
  const openModelComponent = ()=>{
    navigate("/addProduct")
  }


  return (
    <div className='dashboard-main-content-title container'>
      <div className='left-menu-dashboard'>
        <h2>Products</h2>
      </div>
      <div className='right-menu-dashboards'>
        <div className='searchbtn' onClick={openModelComponent}>
          <AiOutlinePlus size={18} /> <span>New</span>
        </div>
      </div>
    </div>
  )
}

export default MainMenuContent;