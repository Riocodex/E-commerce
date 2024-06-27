import React, { useState } from 'react'
import './ListProduct.css'

const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([])


  return (
    <div className='list-product'>
            <h1>All products list</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Tite</p>
                <p>Old price</p>
                <p>New price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
            </div>
    </div>
  )
}

export default ListProduct