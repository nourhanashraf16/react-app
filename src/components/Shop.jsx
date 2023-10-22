import React, { useEffect, useState } from 'react'
import { Product } from './Product';
import Spinner from 'react-bootstrap/Spinner';
import { useGetProducts } from '../hooks/useGetProducts';
import { Loading } from './Loading';
export const Shop = () => {

const [products ,loading, error] = useGetProducts();
// const [Loading , setLoading] = useState(false)
// const [products ,setProducts] =useState(null);
// useEffect(()=>{
//   setLoading(true)
//   fetch('https://fakestoreapi.com/products')
//   .then(res=>res.json())
//   .then((data)=> {
//     console.log(data)
//     setLoading(false)
//     setProducts(data)})
// },[])
// if(Loading){
//   return (
//     <Spinner animation="grow" variant="danger" className='spinner'/>
//   );
// }
  return (
<section className='products py-5'>
  <div className="container">
    <Loading loading={loading} error={error}>
    <div className="row">
      {products?.map((ele)=>{
        return <Product product={ele} key={ele.id}/> })}
    </div>
    </Loading>
  </div>
</section>
  )
}

