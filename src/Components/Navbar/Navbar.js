import React from 'react';
import './Navbar.css';
import avatar from '../../images/person.png';
export default function Navbar() {
    return (
        <div>
        <div className="navbar">
            <div className='left-side'>
                <span><i className="fa-regular fa-calendar"></i></span>
                <span><i className="fa-regular fa-message"></i></span>
                <span><i className="fa-solid fa-envelope"></i></span>
                <span><i className="fa-solid fa-square-check"></i></span>
                <span className='star'><i className="fa-regular fa-star"></i></span>
            </div>
            <div className='right-side'>
                    <div className="select select-fancy select-fancy-image">
                        <select name='' defaultValue=''>
                            <option value='' >English</option>
                            <option value=''>France</option>
                            <option value=''>Germen</option>
                            <option value=''>Portuagal</option>
                        </select>


                </div>
                <span><i className="fa-regular fa-moon"></i></span>
                <span><i className="fa-solid fa-magnifying-glass"></i></span>
                <span ><i className="fa-solid fa-cart-shopping"></i><span className='shopping-cart'>5</span></span>
                <span ><i className="fa-regular fa-bell"></i><span className='bill'>6</span></span>
                <span className='name'><p>John Doe</p>
                <span>admin</span></span>
                <span><img src={avatar} className='avatar' alt='avatar'/><span className='success'></span></span>

            </div>

        </div>
        <div className='pathBar'>
               <span className='title'>Shop</span>
                <span className='home'><i className="fa-solid fa-house-chimney-user"></i></span>
                <span className='arrow'><i className="fa-solid fa-angle-right"></i></span>
                <span className='ecommerce'>eCommerce</span>
                <span className='arrow'><i className="fa-solid fa-angle-right"></i></span>
                <span>shop</span>
              
        </div>
        </div>
    )
}
