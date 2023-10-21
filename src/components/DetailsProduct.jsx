import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { Spinner } from 'react-bootstrap';
export const DetailsProduct = () => {
    const[Loading ,setLoading] = useState(false);
    const params = useParams();
    console.log(params);
    const productId=params.id;
    console.log(productId);
    const [product , setProduct] =useState({})
    useEffect(()=>{
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>{
                setLoading(false)
                setProduct(data)})
    },[])
    if(Loading){
        return( <Spinner animation="grow" variant="danger" className='spinner'/>)
    }
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
                        <h3 className='details_product_category'>{product?.category}</h3>
                           <h4>{product?.title}</h4>
                        <p className='text-muted'>{product?.description}</p>
                        <h5>{`$ ${product.price}`}</h5>
                        <h6 className='d-flex align-items-center details_product_rating'><FaStar/>{product?.rating?.rate}</h6>
                    </div>
                </div>
            </div>
        </div>
     </section>
     </>
  )
}



