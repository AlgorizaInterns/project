import React, { useEffect, useState } from 'react';
import CardList from '../Products/CardList/CardList';
import './Card/Card.css'

export default function Filter({products}) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(products);
  const [filteredProduct, setFilteredProduct] = useState(products);

  useEffect(() => {
    const temp = data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredProduct(temp);
  }, [search,data])

return (
  <div className='productContainer'>

    <div >
      <input placeholder="Search" className='inputbox' value={search} type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
    <CardList products={products} />

  </div>
)
}
