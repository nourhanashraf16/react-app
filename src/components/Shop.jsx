import React, { useEffect, useState } from 'react'
import { Product } from './Product';

export const Shop = () => {

const [products ,setProducts] =useState(null);
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then((data)=> {
    console.log(data)
    setProducts(data)})
},[])

  return (
<section className='products py-5'>
  <div className="container">
    <div className="row">
      {products?.map((ele)=>{
        return <Product product={ele} key={ele.id}/> })}
    </div>
  </div>
</section>
  )
}
