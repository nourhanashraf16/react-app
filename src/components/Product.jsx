import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { StarRatings } from 'react-star-ratings';
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
            <Card.Text className=' text-center product_item_price'> {`$ ${price}`}</Card.Text>
            <Card.Text className='text-warning'>
            {/* <StarRatings
                  rating={rating.rate}
                  starRatedColor=" rgb(255, 32, 32)"
                  starEmptyColor="gray"
                  numberOfStars={5}
                  name="rating"
/> */}
</Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}
