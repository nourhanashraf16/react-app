import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";

export const Product = (props) => {
  console.log(props)
    console.log(props.product)
   const {id ,image , title , description , price , rating ,category} = props.product;
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 product_item my-4'>
            <Card className='shadow'>
            <Link to={`/shop/${id}`} className='my-3'>
              <figure className='product_item_img'>
              <Card.Img variant="top" src={image}  />
              </figure>
            </Link>
          <Card.Body>
            <Card.Title className='product_item_category text-center'>{category}</Card.Title>
            <Card.Text className=' text-center product_item_title '> {title}</Card.Text>
            <Card.Text className='text-muted  text-center product_item_description '> {description}</Card.Text>
            <Card.Text className=' text-center product_item_price'> price : {`$ ${price}`}</Card.Text>
            <Card.Text className='text-white product_item_rating'>{rating.rate } <FaStar/></Card.Text>
            </Card.Body>
    </Card>
    </div>
              )
}
