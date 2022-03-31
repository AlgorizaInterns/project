import React from 'react'
import './Card.css'


export default function Card({ product  }) {
    return (
        <div className="card" >
            {product && (
                <>
                
                    <img src={product.img} alt="imageframe" className="card-img" />
                    <div className="card-body">
                        <div className='price-star'>
                            <h5 > 
                             {Array.from(Array(5).keys()).map((index) =>
                                index < product.rating ? (
                                    <span className="fa fa-star checked"></span>
                                ) : (
                                    <span className="fa-regular fa-star"></span>
                                )
                            )}</h5>
                            <h3 >${product.price}</h3>
                        </div>
                        <p className="product_info">{product.name}</p>
                        <p className="description">{product.discription}</p>

                    </div>
                    <div className='stylebutton'>
                        <button className='wishlist'><i className="fa-solid fa-heart checked"></i>Wishlist</button>
                        <button className='view'><i className="fa-solid fa-cart-shopping"></i>View in cart</button>
                    </div>
                </>
            )}
        </div>
    )
}
