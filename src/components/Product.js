import '../styles/Product.css'
const Product = ({
  id,
  name,
  price,
  rating,
  img,
  description,
  brand,
  available,
  colors,
  view,
}) => {
  const ratingStars = []
  for (let i = 1; i <= 5; i++) {
    ratingStars.push(
      <span
        key={i}
        className={`material-icons-outlined star-icon ${
          rating >= i && 'stared'
        }`}
      >
        {rating >= i ? 'star' : 'star_outline'}
      </span>
    )
  }

  if (view === 'grid')
    return (
      <div className='product-card'>
        <img className='product-img' src={img} alt={name} />
        <div className='rating-price'>
          <p className='rating'>{ratingStars}</p>
          <p className='price'>${price}</p>
        </div>
        <p className='name'>{name}</p>
        <p className='description'> {description} </p>
        <button className='wishlist-btn'>
          <span className='material-icons-outlined'>favorite_border</span>
          <span className='desc'>Wishlist</span>
        </button>
        <button className='in-cart-btn'>
          <span className='material-icons-outlined'>shopping_cart</span>
          <span className='desc'>View In Cart</span>
        </button>
      </div>
    )
  else
    return (
      <div className='product-in-list'>
        <img className='product-img' src={img} alt={name} />
        <div className='name-desc-sec'>
          <p className='name'>{name}</p>
          <p className='vendor'>
            By <span>{brand}</span>
          </p>
          <p className='rating'>{ratingStars}</p>
          <p className='description'> {description} </p>
        </div>
        <div className='price-btns-sec'>
          <p className='price'>${price}</p>
          <button className='wishlist-btn'>
            <span className='material-icons-outlined'>favorite_border</span>
            <span className='desc'>Wishlist</span>
          </button>
          <button className='in-cart-btn'>
            <span className='material-icons-outlined'>shopping_cart</span>
            <span className='desc'>View In Cart</span>
          </button>
        </div>
      </div>
    )
}

export default Product
