import React from 'react'
import SideMenuList from '../SideMenuList/SideMenuList'
import './SideMenu.css'
function SideMenu() {
  return (
    <div className='sideMenu-container'>
      <section className='sideMenu-head'>
        <div className='sideMenu-head-brand'>
          <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/logo.svg" alt="logo" className='head-brand-logo'/>
          <h2 className='head-brand-name'>Vuexy</h2>
        </div>
        <button className='sideMenu-head-collapseBtn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-none d-xl-block collapse-toggle-icon feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
        </button>
      </section>
      <section className='sideMenu-list-scroller'>
          <SideMenuList/>
      </section>
    </div>
  )
}

export default SideMenu