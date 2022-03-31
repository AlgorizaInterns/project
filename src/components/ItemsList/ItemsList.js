import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './ItemsList.css'
//mapping function
const renderItems = (items) => {
    console.log(items)
    return items.map(item =>
       (
            <li>
                <ItemCard
                    item = {item}
                    key = {item.id}
                />
            </li>
        )
    )
}
function ItemsList({items, gridDisplay}) {

    return (
        <ul className='ItemsList'>
            {
                items?.length? renderItems(items) : null
            }
        </ul>
    )
}

export default ItemsList