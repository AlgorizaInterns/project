import React from 'react'
import Card from '../Card/Card'
import '../Card/Card.css';

export default function CardList({products}) {
  return (
    <div  className="continaer1">
      
        {products.map((item ,id)=>(
            <Card product={item} key={id}/>
        ))}
        
    </div>
  )
}
