import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
export const Product = (props) => {
  console.log(props)
    console.log(props.product)
   const {id ,image , title , description , price , rating ,category} = props.product;
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 product_item my-4'>
            <Card className='shadow'>
              <figure className='product_item_img my-3'>
              <Card.Img variant="top" src={image}  />
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
