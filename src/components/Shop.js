import { useEffect, useState } from 'react'

import SearchBar from './SearchBar'
import ProductsList from './ProductsList'
import ViewCustomizer from './ViewCustomizer'
import Filter from './Filter'

import data from '../data/store-demo-data.json'

import '../styles/Shop.css'

const Shop = () => {
  const productList = data['products']
  const [searchTerm, setSearchTerm] = useState('')
  const [order, setOrder] = useState('featured')
  const [products, setProducts] = useState(productList)
  const [view, setView] = useState('grid')
  const [priceMultiRange, setPriceMultiRange] = useState('all')
  const [priceRange, setPriceRange] = useState(10000)
  const [brand, setBrand] = useState('')
  const [rating, setRating] = useState(1)

  const searchHandler = (event) => {
    setSearchTerm(event.target.value)
  }
  const orderHandler = (event) => {
    setOrder(event.target.value)
  }
  const changeView = (newView) => {
    setView(newView)
  }
  const multiRangeHandler = (event) => {
    setPriceMultiRange(event.target.value)
  }
  const priceRangeHandler = (event) => {
    setPriceRange(event.target.value)
  }
  const brandHandler = (event) => {
    setBrand(event.target.value)
  }
  const ratingHandler = (r) => {
    setRating(r)
  }

  const matchSearchTerm = (productName) => {
    return productName
      .trim()
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  }
  const matchBrand = (productBrand) => {
    return productBrand
      .trim()
      .toLowerCase()
      .includes(brand.trim().toLowerCase())
  }
  const inPriceRange = (productPrice) => {
    return productPrice <= priceRange
  }

  const inPriceMultiRange = (productPrice) => {
    if (priceMultiRange === 'all') return true
    else if (priceMultiRange === 'less-than-10') return productPrice <= 10
    else if (priceMultiRange === 'between-10-100')
      return productPrice > 10 && productPrice <= 100
    else if (priceMultiRange === 'between-100-500')
      return productPrice > 100 && productPrice <= 500
    else if (priceMultiRange === 'more-than-500') return productPrice > 500
    else return false
  }

  const hasReqRating = (prodcutRating) => {
    return prodcutRating >= rating
  }
  
  const sortProducts = (filteredProducts) => {
    if (order === 'lowest') {
      const cmp = (a, b) => a.price - b.price
      return filteredProducts.sort(cmp)
    } else if (order === 'highest') {
      const cmp = (a, b) => b.price - a.price
      return filteredProducts.sort(cmp)
    } else {
      return filteredProducts
    }
  }

  useEffect(() => {
    const filteredProducts = productList.filter(
      (product) =>
        matchSearchTerm(product.name) &&
        matchBrand(product.brand) &&
        inPriceRange(product.price) &&
        inPriceMultiRange(product.price) &&
        hasReqRating(product.rating)
    )
    setProducts(sortProducts(filteredProducts))
  }, [searchTerm, order, priceRange, priceMultiRange, brand, rating])

  return (
    <div className='shop-container'>
      <Filter
        priceMultiRange={priceMultiRange}
        multiRangeHandler={multiRangeHandler}
        priceRange={priceRange}
        priceRangeHandler={priceRangeHandler}
        brand={brand}
        brandHandler={brandHandler}
        rating={rating}
        ratingHandler={ratingHandler}
      />
      <div className='shop'>
        <ViewCustomizer
          resultsLength={products.length}
          order={order}
          orderHandler={orderHandler}
          changeView={changeView}
        />
        <SearchBar searchTerm={searchTerm} searchHandler={searchHandler} />
        <ProductsList products={products} view={view} />
      </div>
    </div>
  )
}

export default Shop
