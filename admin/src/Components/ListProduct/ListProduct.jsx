import React, { useState } from 'react'
import './ListProduct.css'

const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([])
    
    const fetchInfo = async()=>{
        await fetch('http://localhost:4000/allproducts')//getdata
        .then((res)=>res.json())//save as jjson
        .then((data)=>{setAllProducts(data)})//saved in usestate variaable
    }

  return (
    <div className='list-product'>
            <h1>All products list</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
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