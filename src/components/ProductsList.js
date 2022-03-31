import Product from './Product'
import '../styles/ProductsList.css'

const ProductsList = ({ products, view }) => {
  return (
    <div className={view}>
      {products.map((product) => (
        <Product key={product.id} {...product} view={view} />
      ))}
    </div>
  )
}

export default ProductsList
