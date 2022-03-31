import React from 'react'
import './Sidebar.css';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div href="#home" className='logo-text'>
                <span >
                    <img className='logo' src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg' alt='Logo' /></span>
                <span className='text'>Vuexy</span></div>
            <div className="collapsable-menu">
                <label htmlFor="menu"><span><i className="fa-solid fa-house"></i></span> Dashboard<i className="fa-solid fa-angle-right"></i></label>
                <div className="menu-content">
                    <ul>
                        <li><i className="fa-regular fa-circle"></i>Home</li>
                        <li><i className="fa-regular fa-circle"></i>Services</li>

                    </ul>
                </div>
            </div>
            <br />  

            <label>Apps & Pages</label>
            <li href="#contact"><i className="fa-solid fa-envelope"></i>Email</li>
            <li href="#about"><i className="fa-solid fa-message"></i>Chat</li>
            <li href="#about"><i className="fa-solid fa-square-check"></i>Todo</li>
            <li href="#about"><i className="fa-solid fa-calendar"></i>Calender</li>
            <li href="#about"><i className="fa-solid fa-file-lines"></i>Invoice</li>
            <li href="#about"><i className="fa-solid fa-cart-shopping"></i>eCommerce
            </li>
            <li href="#about"><i className="fa-solid fa-user"></i>User</li>
            <li href="#about"><i className="fa-solid fa-file"></i>Pages</li>
            <label>USER INTERFACE</label>
            <li href="#about"><i className="fa-solid fa-text-height"></i>Typography</li>
            <li href="#about"><i className="fa-solid fa-droplet"></i>Colors</li>
            <li href="#about"><i className="fa-solid fa-eye"></i>Feather</li>
            <li href="#about"><i className="fa-solid fa-credit-card"></i>Cards</li>
            <li href="#about"><i className="fa-solid fa-box-archive"></i>Components</li>
            <li href="#about"><i className="fa-solid fa-circle-plus"></i>Extentions</li>
            <li href="#about"><i className="fa-solid fa-table-columns"></i>Page Layout</li>

            <label>FORMS & TABLES</label>
            <li href="#about"><i className="fa-solid fa-paste"></i>Forms elements</li>
            <li href="#about"><i className="fa-solid fa-paste"></i>Form Layout</li>
            <li href="#about"><i className="fa-solid fa-box"></i>Form Wizard</li>
            <li href="#about"><i className="fa-solid fa-circle-check"></i>Form Validation</li>
            <li href="#about"><i className="fa-solid fa-paste"></i>Form Repeater</li>
            <li href="#about"><i className="fa-solid fa-bars-progress"></i>BS Table</li>
            <li href="#about"><i className="fa-solid fa-table-cells-large"></i>Good Table</li>
            <label>CHART & MAPS</label>
            <li href="#about"><i className="fa-solid fa-chart-pie"></i>Charts</li>
            <li href="#about"><i className="fa-solid fa-map"></i>Leaflet</li>
            <label>OTHERS</label>
            <li href="#about"><i className="fa-solid fa-shield"></i>Access Control</li>
            <li href="#about"><i className="fa-solid fa-bars"></i>Menu Levels</li>
            <li href="#about" ><i className="fa-solid fa-eye-slash"></i>Disabled Menu</li>
            <li href="#about"><i className="fa-solid fa-life-ring"></i>Raise Support</li>
            <li href="#about"><i className="fa-solid fa-file-lines"></i>Documentation</li>


        </div>
    )
}
