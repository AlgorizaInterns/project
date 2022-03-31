import React from 'react';



const Header = ()=>{

    return(
        
        <nav className='nav'>
            <div>
                <ul  className='bookmark-wrapper'>
                    <li><img src={require("../assets/svgs/calendar.svg")}/></li>
                    <li>Message</li>
                    <li>Mail</li>
                    <li>Check</li>
                    <li>Star</li>
                </ul>
            </div>
            <ul className='info-wrapper'>
                <li>language</li>
                <li>Dark mode</li>
                <li>Search</li>
                <li>Cart</li>
                <li>notifications</li>
                <li>account</li>
            </ul>
            </nav>
        
    )

}

export default Header;