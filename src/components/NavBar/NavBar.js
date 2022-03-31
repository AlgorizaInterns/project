import React, {useState, Fragment} from 'react'
import SideNavList from '../SideNavList/SideNavList'
import './NavBar.css'

function NavBar({searchBarFilter}) {

  const [mainDropDown, viewMainDropDown] = useState(false)
  const [searchBar, viewSearchBar] = useState(false)
  const [notifyDropDown, viewNotifyDropDown] = useState(false)
  const [langDropDown, viewLangDropDown] = useState(false)
  const [cartDropDown, viewCartDropDown] = useState(false)
  

  const toggleMainDropDown = (e) => {
    viewMainDropDown(!mainDropDown)
    viewLangDropDown(false)
    viewCartDropDown(false)
    viewNotifyDropDown(false)
  }

  const toggleSearchBar = (e) => {
    viewSearchBar(!searchBar)
  }

  const toggleNotifyDropDown = (e) => {
    viewNotifyDropDown(!notifyDropDown)
    viewLangDropDown(false)
  }

  const toggleLangDropDown = (e) => {
    viewLangDropDown(!langDropDown)
    viewCartDropDown(false)
    viewNotifyDropDown(false)
  }

  const toggleCartDropDown = (e) => {
    viewCartDropDown(!cartDropDown)
    viewLangDropDown(false)
    viewNotifyDropDown(false)
  }


  return (
    <Fragment>
      { mainDropDown === true ?
        <div className='main-dropDownMenu'>
            <SideNavList/>
        </div>
        :
        null
      }
      <div className='nav-container'>
        {
          searchBar === true ?
            <div className='nav-searchBar-container'>
              <input 
                className='nav-searchBar'
                OnChange={searchBarFilter}>
              </input>
              <span
                onClick={toggleSearchBar}
              >
                <svg data-v-0e8a7f4f="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle data-v-0e8a7f4f="" cx="11" cy="11" r="8"></circle><line data-v-0e8a7f4f="" x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
            </div>
            :
            <Fragment>
              <button 
                className='burger-btn btn'
                onClick={toggleMainDropDown}
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </span>
              </button>
              <ul className='nav-container-list'>
                  <li
                    onClick={toggleLangDropDown}
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC" alt="en" width="22" height="14" class=""/>
                    <span className='nav-text'>
                      English
                    </span>
                  </li>
                  {
                    langDropDown === true ?
                      <div className='nav-dropDown-list lang-d'>
                        <ul>
                          <li>1</li>
                          <li>1</li>
                          <li>1</li>
                          <li>1</li>
                        </ul>
                      </div>
                    : null
                  } 
                <li
                  onClick={toggleSearchBar}
                >
                  <svg data-v-0e8a7f4f="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle data-v-0e8a7f4f="" cx="11" cy="11" r="8"></circle><line data-v-0e8a7f4f="" x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </li>
                <li
                  onClick={toggleCartDropDown}
                >
                  <svg data-v-a58fee00="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-body feather feather-shopping-cart"><circle data-v-a58fee00="" cx="9" cy="21" r="1"></circle><circle data-v-a58fee00="" cx="20" cy="21" r="1"></circle><path data-v-a58fee00="" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                </li>
                <li
                  onClick={toggleNotifyDropDown}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-body feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </li> 
                <li className='nav-userName'>
                  <p className='bolder'>Omar T.Etman</p>
                  <p className='nav-userName-sub'>admin</p>
                </li>
                <li>
                    
                </li>
              </ul>

            </Fragment>
        }
      </div>
    </Fragment>
  )
}

export default NavBar