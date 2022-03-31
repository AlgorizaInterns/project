import React, { useState } from 'react';
import Filters from '../Filters/Filters';
import ItemsList from '../ItemsList/ItemsList';
import products from '../../JSON/products';
import ListFilter from '../ListFilter/ListFilter';
import './Shop.css'
function Shop() {

    const [gridDisplay, setGridDisplay] = useState(true);
    const [items, setItems] = useState(products.products)
    const [filters, setFilters] = useState({})
    function searchForItems(e){
        e.preventDefault();
        const query = e.target.value
        const filteredItems= items.filter((item)=>{    
            return item.name.includes(query);
        })
        if(query===''){
            return setItems(products.products)
        }else{
            return setItems(filteredItems)
        }
    }

    // set an object of filters connected to the event handling functions

    //implement useEffect to rerender on filter and products change

    //function compares object.keys.map with the items within a .filter function within useEffect

    //modify the filter by search function to fit what's above

    return (
        <div className='Shop'>
            <div className='Shop__head'>
                <h1 className='Shop__head__title'>Shop</h1>
            </div>
            <div className='Shop__content'>
                <Filters/>
                <div className='Shop__items'>
                    <ListFilter
                        itemsFound = {items?.length}
                        setGridDisplay = {setGridDisplay}
                        searchForItems = {searchForItems}
                        className='display'
                    />
                    <ItemsList
                        items = {items}
                        gridDisplay = {gridDisplay}
                    />
                </div>
            </div>
        </div>
    )
    }

export default Shop