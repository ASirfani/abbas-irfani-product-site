/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import './index.css'
import { BiSolidBellRing, BiSearchAlt2 } from 'react-icons/bi'
import { BsPersonCircle } from "react-icons/bs";
import ukflag from "../../asset/photos/ukflag.png"
import { IoIosArrowBack } from "react-icons/io";
import { GrNext } from "react-icons/gr"
import { AiOutlineClose } from 'react-icons/ai'

const MenuDashboard = (props) => {
    const [searchinput, setSearchInput] = useState(false)
    const sideVasiblity = props.sideVasiblityData;
    const menuSizeIcon = 23

    const vasitablesideHandler = () => {
        const newSideVisibility = !props.sideVasiblityData; // Toggle the value
        props.sideVasiblityHandler(newSideVisibility); // Dispatch the action to update the sideVasiblity
    };

    const toggleSearchInput = () => {
        setSearchInput(prevState => !prevState);
    };
    return (
        <>
            <div className='menu-dashboard container'>
                <span onClick={vasitablesideHandler} className='sideToggal' >{sideVasiblity ? <IoIosArrowBack size={20} /> : <GrNext size={18} />}</span>
                <div className='left-menu-dashboard'>
                    {/* <span className='dashboard-menu-icon'><AiOutlineMenu className='' size={menuSizeIcon} onClick={toggleSearchInput} /></span> */}
                    <span className='dashboard-menu-icon'><BiSearchAlt2 size={menuSizeIcon} onClick={toggleSearchInput} /></span>
                </div>
                <div className='right-menu-dashboard'>
                    <span className='dashboard-menu-icon'><img src={ukflag} /></span>
                    <span className='dashboard-menu-icon'><BiSolidBellRing size={menuSizeIcon} /></span>
                    <span className='dashboard-menu-icon'><BsPersonCircle size={menuSizeIcon} /></span>
                </div>
            </div>
            {searchinput && (
                <div className="sub-menu-dashboard">
                    <span onClick={vasitablesideHandler} className='sideToggal' >{sideVasiblity ? <IoIosArrowBack size={20} /> : <GrNext size={18} />}</span>
                    <div className='menu-dashboard container'>
                        <div className='left-menu-dashboard'>
                            <span className='dashboard-menu-icons'>
                                <AiOutlineClose size={17} onClick={toggleSearchInput} /> <input type='text' className='searchInput' placeholder='Search' />
                            </span>
                        </div>
                        <div className='right-menu-dashboards'>
                            <span className='dashboard-menu-icon'>
                                <button className='searchbtns'>Search</button>
                            </span>
                        </div>
                    </div>
                </div >
            )}

        </>
    )
}

export default MenuDashboard;