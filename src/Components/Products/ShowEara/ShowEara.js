import React,{useState} from 'react'
import Filter from '../Filter'
import MiniSidebar from '../MiniSidebar/MiniSidebar'
import './ShowEara.css'
import { products } from 'D:/Learning/Algoriza/firstproject/src/dataAPI.js';


export default function ShowEara() {
  const[data ,setData]=useState(products);

    return (
        <div className='container'>
            <div className='information'>
                <p className='filters'>Filters</p>
                <p className='result'>27 results found</p>
                <select name="" defaultValue='' id="category">
                    <option className='option' value="" defaultValue=''>Featured</option>
                    <option className='option' value="">Lowest</option>
                    <option className='option' value="">Highest</option>
                </select>
                <div className='buttons'>
                    <button className='button'><i className="fa-solid fa-list"></i></button>
                    <button className='button'><i className="fa-solid fa-table-cells-large"></i></button>
                </div>
            </div>

            <MiniSidebar products={data} setProduct={setData} />
            <Filter products={data} />
        </div>
    )
}
