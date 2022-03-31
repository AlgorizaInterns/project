import React, {useState} from 'react'
import './SideNavList.css'
function SideNavList() {

    const [dropDown1, setDropDown1] = useState(false)
    const [dropDown2, setDropDown2] = useState(false)
    const viewDropDown1 = (e) => {
        setDropDown1(!dropDown1)
    }
    const viewDropDown2 = (e) => {
        setDropDown2(!dropDown2)
    }

    return (
        <ul className='sideNav__list'>
            <p className='sideNav__list__title'>Apps & pages</p>
            <ul className='sideNav__list__sub'>
                <li>
                    <span className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </span>
                    <span>Email</span>
                </li>
                <li>
                    <span className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </span>
                    <span>Chat</span>
                </li>
                <li>
                    <span className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                    </span>
                    <span>Todo</span>
                </li>
                <li>
                    <span className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </span>
                    <span>calendar</span>
                </li>
                <li onClick={viewDropDown1}>
                    <span className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </span>
                    <span>Invoice</span>
                    <span className='arrow'/>
                </li>
                {dropDown1 === true ?
                    <ul className='sub__dropdown__list'>
                        <li>List</li>
                        <li>Preview</li>
                        <li>Edit</li>
                        <li>Add</li>
                    </ul>
                    :
                    null
                }
                <li onClick={viewDropDown2}>
                    <span className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </span>
                    <span>e-Commerce</span>
                    <span className='arrow'></span>
                </li> 
                {dropDown2 === true ?
                    <ul className='sub__dropdown__list'>
                        <li>List</li>
                        <li>Preview</li>
                        <li>Edit</li>
                        <li>Add</li>
                    </ul>
                    :
                    null
                }         
            </ul>
        </ul>

    )
}

export default SideNavList