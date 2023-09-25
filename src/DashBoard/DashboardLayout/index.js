/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './index.css';
import MenuDashboardContianer from '../../container/MenuDashboardContainer';
import SidebarContainer from '../../container/SidebarContainer';
import MainProductContent from '../MainProductContent';
import MainMenuContent from '../MainMenuContent';


const DashboardLayout = () => {

  return (
    <div className='dashboard'>

      {/* side */}
      <div className='dashboard-sidebar'>
        <div className='dashboard-sidebar-content'>
          <SidebarContainer />
        </div>
      </div>

      {/* main */}
      <div className='main'>
        {/* main-top  menu unmoveable menu */}
        <div className='dashtboard-main-topmenu'>
          <MenuDashboardContianer />
        </div>
        <div className='dashboard-main-content'>
          <div className='container'>
            {/* content menu */}
            <MainMenuContent />
            {/* table */}
            <MainProductContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
