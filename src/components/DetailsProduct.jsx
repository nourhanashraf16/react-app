import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export const DetailsProduct = () => {
    const params = useParams()
    console.log(params)
    const productId=params.id;
    console.log(productId);
    const [product , setProduct] =useState({})
    const getProduct =()=> {
        return fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    };
    useEffect(()=>{
        getProduct()
    },[])
  return (
     <>
     <section className='details_product py-5'>
        <div className="container">
            <div className="row">
                <div className='col-md-6'>
                    <figure className='details_product_img'>
                        <img src={product?.image} alt="" />
                    </figure>
                </div>
                <div className='col-md-6'>
                    <div className='details_product_content'>
                        <h4>{product?.title}</h4>
                        <h3 className=''>{product?.category}</h3>
                        <p className='text-muted'>{product?.description}</p>
                        <h5>{`$ ${product.price}`}</h5>
                        <h6>{product?.rating?.rate}</h6>
                    </div>
                </div>
            </div>
        </div>
     </section>
     </>
  )
}



