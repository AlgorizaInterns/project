import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import './ItemCard.css'
function ItemCard({item}) {
    const {img, price, name, description, rating} = item

    return (
        <div className = 'itemCard__container'>
            <img src={img} alt={name}/>
            <div className ='itemCard__container__info'>
                <div className = 'conatiner__info__ratingAndPrice'>
                    <span className='rating__container'>
                        <span>Rating</span>
                        <StarRatingComponent 
                            name="rate2" 
                            editing={false}
                            renderStarIcon={() => <span></span>}
                            starCount={5}
                            value={rating}
                        />
                    </span>
                    <span>{price}</span>
                </div>
                <div className='conatiner__info__summary'>
                    <p className ='info__summary__title'>
                        {name}
                    </p>
                    <p className='info__summary__description'>
                        {description}
                    </p>
                </div>
            </div>
            <div className='itemCard__container__buttons'>
                <button className='container__buttons__wishList'>
                    <span className='icon'>
                        <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-heart"><path data-v-15eba8c6="" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>    
                    </span>
                    <span>Wishlist</span>
                </button>
                <button className='container__buttons__addToCart'>
                    <span className='iconTwo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </span>
                    <span>View in cart</span>
                </button>
            </div>
        </div>
    )
}

export default ItemCard