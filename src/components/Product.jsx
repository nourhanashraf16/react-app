import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice'; 
export const Product = (props) => {
  const {  id , image, title, description, price, rating, category ,totalPrice } = props.product;
  const dispatch = useDispatch();
  const handleAddToCart = (value)=>{
    dispatch(addToCart( value))
  }
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 product_item my-4' key={id}>
            <Card className='shadow'>
              <figure className='product_item_img my-3'>
              <Card.Img variant="top" src={image} />
              <span className='product_icon' onClick={()=> handleAddToCart(props.product)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                </span>
              </figure>
          <Card.Body>
            <Card.Title className='product_item_category text-center'>{category}</Card.Title>
            <Card.Text className=' product_item_title text-center'> {title}</Card.Text>
            <Card.Text className='text-muted text-center product_item_description '> {description}</Card.Text>
            <div className='d-flex align-items-conter justify-content-between'>
            <Card.Text className=' product_item_price my-0'> {`$ ${price}`}</Card.Text>
            <Card.Text className='text-white product_item_rating my-0' >{rating.rate } <FaStar/></Card.Text>
            </div>
           <div className='d-flex justify-content-center my-3'>
           <Link to={`/shop/${id}`} className=' product_item_btn'>view Details</Link>
           </div>
            </Card.Body>
    </Card>
    </div>
              )
}
