import React, {useState} from 'react'
import './ListFilter.css'

function ListFilter({itemsFound, setGridDisplay, searchForItems}) {

    const [dropDown, setDropDown] = useState(false)

    const viewDropDown = (e) => {
        setDropDown(!dropDown)
    }

    return (
        <div className="listFilter__container">
            <div className='listFilter__container__options'>
                <p className='container__options__title'>{`Items found ${itemsFound}`}</p>
                <div className='container__options__btns'>
                    <div className='dropdown__container'>
                        <button className='options__btns__dropdown btn'
                        onClick={viewDropDown}>
                            <span>Featured</span>
                        </button>
                        {dropDown === true ? 
                            <ul className='btns__dropdown__list'>
                                <li>Featured</li>
                                <li>Lowest</li>
                                <li>Highest</li>
                            </ul>
                            :
                            null
                        }

                    </div>
                    <div className='options__btns__display'>
                        <button className='btns__display__toggler tog1 btn'>
                            <span>
                                <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect data-v-15eba8c6="" x="3" y="3" width="7" height="7"></rect><rect data-v-15eba8c6="" x="14" y="3" width="7" height="7"></rect><rect data-v-15eba8c6="" x="14" y="14" width="7" height="7"></rect><rect data-v-15eba8c6="" x="3" y="14" width="7" height="7"></rect></svg>
                            </span>
                        </button>
                        <button className='btns__display__toggler btn'>
                            <span>
                                <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line data-v-15eba8c6="" x1="8" y1="6" x2="21" y2="6"></line><line data-v-15eba8c6="" x1="8" y1="12" x2="21" y2="12"></line><line data-v-15eba8c6="" x1="8" y1="18" x2="21" y2="18"></line><line data-v-15eba8c6="" x1="3" y1="6" x2="3.01" y2="6"></line><line data-v-15eba8c6="" x1="3" y1="12" x2="3.01" y2="12"></line><line data-v-15eba8c6="" x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='listFilters__container__searchBar'>
                <input className='container__searchBar__input'
                onChange={searchForItems}>
                </input>
                <span className='icon'>
                    <svg data-v-0e8a7f4f="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle data-v-0e8a7f4f="" cx="11" cy="11" r="8"></circle><line data-v-0e8a7f4f="" x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>
            </div>
        </div>
    )
}

export default ListFilter