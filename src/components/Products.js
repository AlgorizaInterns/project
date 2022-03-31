import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import './Products.modules.scss'
import productsData from '../data/data'
import Product from './sub-combonents/Product';
import PriceRange from './sub-combonents/PriceRange';
import Ordering from './sub-combonents/Ordering';
// import ProductsList from './sub-combonents/ProductsList';


// consts for filters
const ranges = [
  { title: 'All', down: 0, up:1000000, name: 'all'},
  { title: '<= $10', down: 0, up:10, name: '10'},
  { title: '$10 - $100', down: 10, up:100, name: '100'},
  { title: '$100 - $500', down: 100, up:500, name: '500'},
  { title: '>= $500', down: 500, up:1000000, name: 'more'},
]

const categories = [ 'Appliances', 'Audio', 'Cameras & Camcorders', 'Car Electronics & GPS', 'Cell Phones',
                    'Computers & Tablets', 'Health, Fitness & Beauty', 'Office & School Supplies', 'TV & Home Theater',
                    'Video Games']

const brands = [ 'All', 'Insignia™', 'Samsung', 'Metra', 'HP', 'Apple', 'GE', 'Sony', 'Incipo', 'KitchenAid', 'whirlpool']

const ratings = [ 5, 4, 3, 2, 1]

export default function Products({ useFilters, showingFilters, handleAddToCart }){

  const [rangeState, setRangeState] = useState({down: 0, up:1000000})
  const [categoryState, setCategoryState] = useState(null)
  const [ratingState, setRatingState] = useState(null)
  const [brandsState, setBrandsState] = useState('All')
  const [search, setSearch] = useState('')
  const [products, setProducts ] = useState(productsData.products)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [order, setOrder ] = useState('Features')
  

  const StarIcon = ({fill, stroke}) => {
    return <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill={fill? '#FF9F43' : "none"} stroke={stroke ? "currentColor": "none"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star fill-current text-warning"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  }
  
  //sorting
  useEffect( () => {
    let temp = selectedProducts;
    if( order == 'Features'){ // sorting at what
      temp.sort((a, b) => a.id > b.id ? 1 : -1)
    }else if(order == 'Lowest'){
      temp.sort((a, b) => a.price > b.price ? 1 : -1)
    }else if(order == 'Highest'){
      temp.sort((a, b) => a.price < b.price ? 1 : -1)
    }
    setSelectedProducts(temp)
  }, [order])

  //filtering
  useEffect(() => {
    setSelectedProducts(
      products.filter( product => search === ''? product : product.name.toLowerCase().includes(search.toLowerCase().trim()) )
        .filter( product => brandsState == 'All'? product: product.brand == brandsState.toLowerCase() )
        .filter( product => ratingState == null? product: product.rating == ratingState || product.rating > ratingState )
        .filter( product => product.price < rangeState.up && product.price > rangeState.down )
        .filter( product => product.available )
    )
  }, [rangeState, categoryState, brandsState, search, ratingState])

  return (
    <div className='products'>
      <div className={`products__left ${showingFilters && 'show'}`}>
        <h2>Filters</h2>
        <div className='products__left__card comp'>
          <div className="products__left__card__filter">
            <h2>Multi Range</h2>
            {ranges.map( range => (
              <div key={range.name} className='radio'>
                <input type="radio" id={range.name} name="range" value={range.name} onChange={ e => setRangeState({ down: range.down, up: range.up}) } />
                <label htmlFor={range.name}>{range.title}</label>
              </div>
            ))}
          </div>

          <PriceRange />

          <div className="products__left__card__filter">
            <h2>Categories</h2>
            {categories.map( category => (
              <div key={category} className='radio'>
                <input type="radio" id={category} name="categories" value={category} onChange={ e => setCategoryState(e.target.value) }/>
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>

          <div className="products__left__card__filter">
            <h2>Brands</h2>
            {brands.map( brand => (
              <div key={brand} className='radio'>
                <input type="radio" id={brand} name="brands" value={brand} onChange={ e => setBrandsState(e.target.value) }/>
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </div>

          <div className="products__left__card__filter">
            <h2>Ratings</h2>
            {ratings.map( rating => (
              <div key={rating} className='radio'>
                <input type="radio" id={rating} name="ratings" value={rating} onChange={ e => setRatingState(rating) } />
                <label htmlFor={rating}>{rating} Star{ rating == 1 ? '' : 's'}</label>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className='products__right'>
        <div className='products__right__header'>
          <div className='products__right__header__left'>
            <h2>{selectedProducts.length || 'No'} results found</h2>
            <a href='#' onClick={ useFilters } className='burger--menu--filter'><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a>
          </div>
          <div className='products__right__header__right'>
            <Ordering selectedOder={order} setSelectedOrder={setOrder} />
          </div>
        </div>
        <div className='products__right__search comp'>
          <input value={search} onChange={ e => setSearch(e.target.value)} placeholder='Search...' className='products__right__search__input' />
          <FiSearch />
        </div>
        {/* <ProductsList selectedProducts={selectedProducts} /> tring add pages feature to products*/} 
        <div className='products__right__list'>
          {selectedProducts
            .map( product => <Product handleAddToCart={handleAddToCart} StarIcon={StarIcon} key={product.id} product={product} />)
          }
          
        </div>
      </div>
    </div>
  )
}