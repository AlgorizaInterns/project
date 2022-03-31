import RatingStars from './RatingStars'

import '../styles/Filter.css'

const Filter = ({
  priceMultiRange,
  multiRangeHandler,
  priceRange,
  priceRangeHandler,
  brand,
  brandHandler,
  rating,
  ratingHandler,
}) => {
  const ratingNums = [160, 176, 291, 190]
  const ratingItems = []
  for (let i = 4; i >= 1; i--) {
    ratingItems.push(
      <div key={i} className='rating-item' onClick={() => ratingHandler(i)}>
        <RatingStars rating={i} up={true} />
        <p>{ratingNums[4 - i]}</p>
      </div>
    )
  }

  const brandNames = [
    'Insignia™',
    'Samsung',
    'Metra',
    'HP',
    'Apple',
    'GE',
    'Sony',
    'Incipio',
    'KitchenAid',
    'Whirlpool',
  ]
  const brandsItems = brandNames.map((brandName) => (
    <div key={brandName} className='group-input'>
      <input
        type='radio'
        name='brands'
        checked={brand.toLowerCase() === brandName.toLowerCase()}
        value={brandName.toLowerCase()}
        onChange={brandHandler}
      />
      <label>{brandName}</label>
    </div>
  ))

  const categories = [
    'Appliances',
    'Audio',
    'Cameras & Camcorders',
    'Car Electronics & GPS',
    'Cell Phones',
    'Computers & Tablets',
    'Health, Fitness & Beauty',
    'Office & School Supplies',
    'TV & Home Theater',
    'Video Games',
  ]
  const categoryItems = categories.map((category) => (
    <div className='group-input' key={category}>
      <input type='radio' name='categories' />
      <label>{category}</label>
    </div>
  ))

  const multiRanges = [
    ['All', 'all'],
    ['<= $10', 'less-than-10'],
    ['$10 - $100', 'between-10-100'],
    ['$100 - $500', 'between-100-500'],
    ['>= 500', 'more-than-500'],
  ]
  const multiRangesItems = multiRanges.map((mRange) => (
    <div className='group-input' key={mRange[1]}>
      <input
        type='radio'
        name='price-range'
        onChange={multiRangeHandler}
        checked={priceMultiRange === mRange[1]}
        value={mRange[1]}
      />
      <label>{mRange[0]}</label>
    </div>
  ))
  return (
    <div className='filter-container'>
      <p className='main-title'>Filters</p>
      <form className='filter'>
        <div className='input-group'>
          <p className='group-title'>Multi Range</p>
          {multiRangesItems}
        </div>
        <div className='input-group'>
          <p className='group-title'>Price Range</p>
          <div className='group-input'>
            <input
              type='range'
              onChange={priceRangeHandler}
              value={priceRange}
              min={0}
              max={10000}
            />
          </div>
        </div>
        <div className='input-group'>
          <p className='group-title'>Categories</p>
          {categoryItems}
        </div>
        <div className='input-group'>
          <p className='group-title'>Brands</p>
          {brandsItems}
        </div>
        <div className='input-group'>
          <p className='group-title'>Ratings</p>
          {ratingItems}
        </div>
      </form>
    </div>
  )
}

export default Filter
